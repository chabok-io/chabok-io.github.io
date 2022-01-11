<template>
	<c-card>
		<c-row
			justify="between"
			class="mb-4"
		>
			<h4>
				Push Notification
			</h4>
			<c-button
				icon="setting"
				icon-only
				variant="warning"
				@click="openFirebaseConfigModal=true"
			/>
		</c-row>

		<c-button
			:disabled="!initialized || !canInitializeFirebase"
			variant="primary"
			class="mb-4"
			block
			@click="onGetToken"
		>
			Get Push Token
		</c-button>

		<div
			v-if="pushToken"
		>
			<c-textarea
				v-model="pushToken"
				label="Your Push Token:"
				class="mb-4"
				read-only
				fluid
			/>

			<c-button
				variant="primary"
				block
				@click="onSendPushToken"
			>
				Send push token
			</c-button>
		</div>
	</c-card>
	<c-modal
		v-model="openFirebaseConfigModal"
		title="Firebase Configurations"
	>
		<c-input
			v-model="model.firebaseConfigs.apiKey"
			label="API Key"
			class="mb-4"
			fluid
		/>
		<c-input
			v-model="model.firebaseConfigs.authDomain"
			label="Auth Domain"
			class="mb-4"
			fluid
		/>
		<c-input
			v-model="model.firebaseConfigs.projectId"
			label="Project ID"
			class="mb-4"
			fluid
		/>
		<c-input
			v-model="model.firebaseConfigs.storageBucket"
			label="Storage Bucket"
			class="mb-4"
			fluid
		/>
		<c-input
			v-model="model.firebaseConfigs.messagingSenderId"
			label="Messaging Sender ID"
			class="mb-4"
			fluid
		/>
		<c-input
			v-model="model.firebaseConfigs.appId"
			label="App ID"
			class="mb-4"
			fluid
		/>
		<c-input
			v-model="model.firebaseConfigs.vapid"
			label="VAPID"
			class="mb-4"
			fluid
		/>
		<template #footer>
			<c-row justify="end">
				<c-button
					variant="warning"
					class="px-5"
					@click="openFirebaseConfigModal = false"
				>
					Close
				</c-button>
			</c-row>
		</template>
	</c-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { CCard, CInput, CButton, CTextarea, CModal, CRow } from './ui';

export default defineComponent({
	name: 'PushNotificationsView',
	components: {
		CTextarea,
		CCard,
		CInput,
		CButton,
		CModal,
		CRow,
	},
	props: {
		modelValue: {
			type: Object,
			required: true,
		},
		initialized: {
			type: Boolean,
			required: true,
		},
	},
	emits: ['update:modelValue', 'push-id'],
	data() {
		return {
			openFirebaseConfigModal: false,
			pushToken: '',
		};
	},
	computed: {
		model: {
			get(): any {
				return this.modelValue;
			},
			set(newVal: object): void {
				this.$emit('update:modelValue', newVal);
			},
		},
		canInitializeFirebase(): boolean {
			const keys = Object.keys(this.model.firebaseConfigs);
			return keys.every(key => this.model.firebaseConfigs[key]);
		},
	},
	methods: {
		onGetToken() {
			const configs = {
				apiKey: this.model.firebaseConfigs.apiKey,
				authDomain: this.model.firebaseConfigs.authDomain,
				projectId: this.model.firebaseConfigs.projectId,
				storageBucket: this.model.firebaseConfigs.storageBucket,
				messagingSenderId: this.model.firebaseConfigs.messagingSenderId,
				appId: this.model.firebaseConfigs.appId,
			};
			initializeApp(configs);

			const messaging = getMessaging();
			const instance = this;
			getToken(messaging, { vapidKey: instance.model.firebaseConfigs.vapid })
				.then((currentToken) => {
					if (currentToken) {
						instance.pushToken = currentToken;
					} else {
						this.$toast.warning('No registration token available. Request permission to generate one.');
					}
				})
				.catch(() => {
					this.$toast.danger('An error occurred while retrieving token.');
				});
		},

		async onSendPushToken() {
			this.$emit('push-id', this.pushToken);
		},
	},
});

</script>
