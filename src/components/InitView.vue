<template>
	<c-card class="mb-4">
		<!-- Init -->
		<c-row justify="between">
			<div>
				<h4 class="title">
					Init SDK
				</h4>
			</div>
			<c-button
				icon="setting"
				icon-only
				variant="primary"
				@click="openConfigsModal = true"
			/>
		</c-row>
		<section>
			<c-input
				v-model="model.initData.defaultTracker"
				:disabled="initialized || !sdkFetched"
				label="Default Tracker"
				class="mb-4"
				fluid
				autofocus
			/>
			<c-button
				:disabled="initialized || !sdkFetched"
				block
				@click="onSetDefaultTracker"
			>
				Set default tracker
			</c-button>
		</section>
		<hr>
		<form class="init_form">
			<c-input
				v-model="model.initData.clientId"
				:disabled="initialized || !sdkFetched"
				placeholder="clientId"
				label="Client ID"
				helper="required"
				class="mb-4"
				fluid
				autofocus
			/>
			<c-input
				v-model="model.initData.clientSecret"
				:disabled="initialized || !sdkFetched"
				placeholder="clientSecret"
				label="Client Secret"
				helper="required"
				class="mb-4"
				fluid
				autofocus
			/>
			<c-button
				:disabled="initialized || !sdkFetched"
				class="mb-4"
				variant="primary"
				block
				@click="onInit"
			>
				Initialize
			</c-button>
		</form>
		<c-button
			variant="danger"
			block
			@click="onWipeStorage"
		>
			Wipe Storage
		</c-button>
	</c-card>
	<c-modal
		v-model="openConfigsModal"
		title="Configs"
	>
		<c-row
			wrap="nowrap"
			align-items="end"
		>
			<c-input
				v-model="model.configs.cdn"
				label="SDK CDN URL"
				fluid
			/>
			<c-button
				variant="success"
				class="ml-4 mb-1"
				@click="onReload"
			>
				Reload
			</c-button>
		</c-row>
		<template #footer>
			<c-row justify="end">
				<c-button
					variant="warning"
					@click="openConfigsModal = false"
				>
					Close
				</c-button>
			</c-row>
		</template>
	</c-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CRow, CCard, CInput, CButton, CModal } from './ui';

export default defineComponent({
	name: 'InitView',
	components: {
		CRow,
		CCard,
		CInput,
		CButton,
		CModal,
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
		sdkFetched: {
			type: Boolean,
			required: true,
		},
	},
	emits: ['update:modelValue', 'init', 'set-default-tracker'],
	data() {
		return {
			openConfigsModal: false,
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
	},
	methods: {
		onSetDefaultTracker() {
			this.$emit('set-default-tracker');
		},
		onWipeStorage() {
			localStorage.clear();
		},
		onReload() {
			window.location.reload();
		},
		onInit()  {
			this.$emit('init');
		},
	},
});

</script>
