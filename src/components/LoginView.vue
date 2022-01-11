<template>
	<c-card class="mb-4">
		<c-row>
			<h4 class="title">
				Login/Logout
			</h4>
		</c-row>
		<form>
			<div class="mb-4">
				<c-input
					v-model="model.login.userId"
					:disabled="!initialized"
					label="User ID"
					class="mb-4"
					fluid
					autofocus
				/>
			</div>
			<c-button
				:disabled="disableLogin"
				variant="primary"
				class="mb-2"
				block
				@click="onLogin"
			>
				Login
			</c-button>
			<c-button
				:disabled="disableLogout"
				variant="danger"
				block
				@click="onLogout"
			>
				Logout
			</c-button>
		</form>
	</c-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CInput, CButton, CCard, 	CRow } from './ui';

export default defineComponent({
	name: 'LoginView',
	components: {
		CRow,
		CInput,
		CButton,
		CCard,
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
	emits: ['update:modelValue', 'login', 'logout'],
	data() {
		return {
			loggedIn: false,
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
		disableLogin(): boolean {
			if (!this.model.login.userId) {
				return true;
			}
			return false;
		},
		disableLogout(): boolean {
			return !this.initialized;
		},
	},
	methods: {
		onLogin() {
			this.$emit('login');
		},
		onLogout() {
			this.$emit('logout');
		},
	},
});

</script>
