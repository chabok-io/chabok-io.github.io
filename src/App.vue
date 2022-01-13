<template>
	<c-row class="main -m-2">
		<c-col
			xs="12"
			md="6"
			xxl="3"
			class="p-2"
		>
			<init-view
				v-model="model"
				:initialized="initialized"
				:sdk-fetched="sdkFetched"
				@init="init"
				@set-default-tracker="setDefaultTracker"
			/>
			<login-view
				v-model="model"
				:initialized="initialized"
				@login="login"
				@logout="logout"
			/>
			<user-attribute-view
				v-model="model"
				:initialized="initialized"
				@attribute="attribute"
			/>
		</c-col>
		<c-col
			xs="12"
			md="6"
			xxl="3"
			class="p-2"
		>
			<profile-view
				v-model="model"
				:initialized="initialized"
				@profile="profile"
			/>
			<location-view
				v-model="model"
				:initialized="initialized"
				@location="location"
			/>
		</c-col>
		<c-col
			xs="12"
			lg="auto"
			class="p-2"
		>
			<event-view
				v-model="model"
				:initialized="initialized"
				@event="event"
			/>
			<push-notifications-view
				v-model="model"
				:initialized="initialized"
				@push-id="pushId"
			/>
		</c-col>
	</c-row>
	<div class="logger-container">
		<span class="logger-title"> === Chabok SDK Logger === </span>
		<div
			v-if="sdkFetched"
			class="logger-detail"
		>
			<div
				v-for="(log, index) in getLogs"
				:key="index"
			>
				<div class="logger-time">
					{{ log.time }}
				</div>
				<div :style="`word-wrap: break-word; color: ${log.color}`">
					{{ log.message }}
				</div>
				<div style="clear: both" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InitView from './components/InitView.vue';
import ProfileView from './components/ProfileView.vue';
import LocationView from './components/LocationView.vue';
import UserAttributeView from './components/UserAttributeView.vue';
import EventView from './components/EventView.vue';
import LoginView from './components/LoginView.vue';
import PushNotificationsView from './components/PushNotificationsView.vue';
import { CRow, CCol } from './components/ui';
import { debounce } from '@/utils';

export default defineComponent({
	name: 'App',
	components: {
		InitView,
		ProfileView,
		LocationView,
		UserAttributeView,
		EventView,
		LoginView,
		PushNotificationsView,
		CRow,
		CCol,
	},
	data() {
		const previousInitData = localStorage.getItem('sdk_demo')
			? JSON.parse(localStorage.getItem('sdk_demo') as string)
			: {
				initData: {
					clientId: '',
					clientSecret: '',
				},
				firebaseConfigs: {
					apiKey: '',
					authDomain: '',
					projectId: '',
					storageBucket: '',
					messagingSenderId: '',
					appId: '',
					vapid: '',
				},
				configs: {
					cdn: '',
				},
			};
		return {
			model: {
				initData: {
					clientId: previousInitData ? previousInitData.initData.clientId : '',
					clientSecret: previousInitData ? previousInitData.initData.clientSecret : '',
					defaultTracker: '',
				},
				profileData: {
					email: '',
					gender: '',
					phoneNumber: '',
					timezone: '-210',
					birthDate: '',
					name: '',
					family: '',
				},
				locationData: {
					lat: 0,
					lan: 0,
				},
				userAttrData: {
					key: '',
					value: '',
				},
				eventData: {
					id: '',
					body: '',
				},
				login: {
					userId: '',
				},
				firebaseConfigs: {
					apiKey: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.apiKey : '',
					authDomain: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.authDomain : '',
					projectId: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.projectId : '',
					storageBucket: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.storageBucket : '',
					messagingSenderId: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.messagingSenderId : '',
					appId: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.appId : '',
					vapid: previousInitData.firebaseConfigs ? previousInitData.firebaseConfigs.vapid : '',
				},
				configs: {
					cdn: previousInitData.configs.cdn || 'https://cdn.chabok.io/chabok.iife.js',
				},
			},
			now: Date.now(),
			initialized: false,
			sdk: null as null | any,
		};
	},
	computed: {
		sdkFetched(): boolean {
			return !!this.sdk;
		},
		getLogs(): Object {
			let logs = {};
			if (this.sdkFetched) {
				this.now;
				logs = this.sdk.getLogger();
			}
			return logs;
		},
	},
	watch: {
		'model.initData': {
			handler() {
				this.debouncedWriteToStorage();
			},
			deep: true,
		},
		'model.firebaseConfigs': {
			handler() {
				this.debouncedWriteToStorage();
			},
			deep: true,
		},
		'model.configs': {
			handler() {
				this.debouncedWriteToStorage();
			},
			deep: true,
		},
	},
	created() {
		this.debouncedWriteToStorage = debounce(this.debouncedWriteToStorage, 500);
		setInterval(
			() => {
				this.now = Date.now();
			},
			1000,
		);
		this.loadScript();
	},
	methods: {
		loadScript() {
			if (this.model.configs.cdn) {
				const { head } = document;
				const script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = this.model.configs.cdn;

				script.onload = this.onFetchSDK;
				script.onerror = this.inFetchSDKError;

				head.appendChild(script);
				return;
			}
			this.$toast.warning('No valid CDN found. add a new url to fetch the SDK and reload the page.');
		},
		debouncedWriteToStorage() {
			window.localStorage.setItem('sdk_demo', JSON.stringify(this.model));
		},
		onFetchSDK() {
			try {
				const { chabok } = window as any;

				let instance: any;

				// A simple check to prevent errors in HMR
				if (!chabok.isInitialized) {
					instance = new chabok();
					instance.setLogger({
						logLevel: 'verbose', // verbose
						enable: true, // enable-disable show logs on console
						buffersSize: 100, //logs limitation
					});
				}
				this.sdk = instance;

			} catch(err) {
				this.onFetchSDK();
			}
		},
		inFetchSDKError() {
			this.$toast.danger('Failed to load the SDK\'s script. check the CDN URL and try again.');
		},
		setDefaultTracker() {
			if(!this.initialized && this.sdkFetched) {
				this.sdk.setDefaultTracker(this.model.initData.defaultTracker);
			}
		},
		init() {
			this.sdk
				.init(this.model.initData.clientId, this.model.initData.clientSecret)
				.then((result: boolean) => {
					if (result) {
						this.$toast.success('SDK initialized!');
						this.initialized = true;
						return;
					}
					this.$toast.danger('SDK not initialized. check your credentials and try again.');
				})
				.catch((err: Error) => {
					this.$toast.danger('Failed to initialize the SDK. Check the browser\'s console for more info');
					console.log(err);
				});
		},
		login() {
			this.sdk
				.user()
				.login(this.model.login.userId)
				.then(() => {
					this.$toast.success('Logged in successfully!');
				});
		},
		logout() {
			this.sdk
				.user()
				.logout(this.model.login.userId);
		},
		attribute() {
			this.sdk
				.user()
				.setAttribute(this.model.userAttrData.key, this.model.userAttrData.value)
				.then((res: boolean) => {
					if (res) {
						this.$toast.success('Attribute sent successfully.');
					} else {
						throw new Error();
					}
				})
				.catch(() => {
					this.$toast.danger('Failed to set Attribute.');
				});
		},
		profile() {
			const sexBinary = this.model.profileData.gender === 'male' ? 1 : 0;
			this.sdk
				.user()
				.setProfile({
					sexBinary,
					email: this.model.profileData.email,
					phoneNumber: this.model.profileData.phoneNumber,
					timezone: this.model.profileData.timezone,
					name: this.model.profileData.name,
					family: this.model.profileData.family,
					birthDate: this.model.profileData.birthDate,
				})
				.then((res: boolean) => {
					if (res) {
						this.$toast.success('Profile updated!');
					} else {
						this.$toast.danger('Failed to update profile!');
					}
				});
		},
		location() {
			this.sdk.user()
				.setLocation(
					Number(this.model.locationData.lat),
					Number(this.model.locationData.lan),
				)
				.then((res: boolean) => {
					if (res) {
						this.$toast.success('Location updated!');
					} else {
						this.$toast.danger('Failed to update location!');
					}
				});
		},
		event() {
			this.sdk
				.analytics()
				.sendEvent(this.model.eventData.id, JSON.parse(this.model.eventData.body))
				.then((res: boolean) => {
					if (res) {
						this.$toast.success('Event sent successfully.');
					} else {
						throw new Error();
					}
				})
				.catch(() => {
					this.$toast.danger('Failed to send event. check the payload and try again');
				});
		},
		pushId(pushToken: string) {
			this.sdk
				.user()
				.setPushId(pushToken)
				.then((res: boolean) => {
					if (res) {
						this.$toast.success('Push Token Sent');
					} else {
						throw new Error();
					}
				})
				.catch(() => {
					this.$toast.danger('Failed to update push token.');
				});
		},
	},
});
</script>

<style lang="postcss">
:root {
  background-color: var(--neutral-20) !important;
  font-family: 'Open Sans', monospace !important;
}
.main  *:not(i) {
  font-family: 'Open Sans', monospace !important;
}

.main {
  width: 70% !important;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.title {
  margin-bottom: 10px;
}
.input {
  width: 240px !important;
}

.logger-container {
	@apply fixed z-10 top-0 bottom-0 right-2 ;
	@apply bg-neutral-900 my-2 rounded-lg overflow-auto p-4 shadow-xl text-sm;
	font-family: 'Fira Code', monospace !important;
	width: 30%;
	backdrop-filter: blur(5px);
}
.logger-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.8);
}
.logger-container::-webkit-scrollbar {
  width: 4px;
  background-color: #f5f5f5;
}
.logger-container::-webkit-scrollbar-thumb {
  border: 2px solid #000000;
}
.logger-title {
  color: #afa;
  font-weight: bold;
  font-family: 'Open Sans';
}
.logger-detail {
  overflow: hidden;
  margin-top: 16px;
}
.logger-time {
  color: #999;
  float: left;
  margin-right: 6px;
}

/* On screens that are 1600px or less */
@media screen and (min-width: 1200px) and (max-width: 1700px) {
  .main {
    width: 60% !important;
  }
  .logger-container {
    width: 40% !important;
  }
}
/* On screens that are 1600px or less */
@media screen and (min-width: 700px) and (max-width: 1200px) {
  .main {
    width: 65% !important;
  }
  .logger-container {
    width: 35% !important;
  }
}
</style>
