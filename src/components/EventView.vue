<template>
	<c-card class="mb-4">
		<c-row>
			<h4 class="title">
				Events
			</h4>
		</c-row>
		<form>
			<div class="mb-4">
				<c-input
					v-model="model.eventData.id"
					:disabled="!initialized"
					label="Event ID"
					class="mb-4"
					fluid
					autofocus
				/>
				<c-textarea
					v-model="model.eventData.body"
					:disabled="!initialized"
					label="Event Body"
					class="mb-4"
					:error="!isValidJson"
					fluid
					:helper="!isValidJson ? 'JSON input is not valid' : ''"
					@update:model-value="debouncedJSONCheck"
				/>
			</div>
			<c-button
				:disabled="disableSubmit"
				variant="primary"
				block
				@click="event"
			>
				Send
			</c-button>
		</form>
	</c-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CInput, CButton, CCard, CTextarea, CRow } from './ui';
import { debounce } from '@/utils/';

export default defineComponent({
	name: 'EventView',
	components: {
		CRow,
		CInput,
		CButton,
		CCard,
		CTextarea,
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
	emits: ['update:modelValue', 'event'],
	data() {
		return {
			isValidJson: true,
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
		disableSubmit(): boolean {
			if (!this.model.eventData.id || !this.modelValue.eventData.body || !this.isValidJson) {
				return true;
			}
			return false;
		},
	},
	created() {
		this.debouncedJSONCheck = debounce(this.debouncedJSONCheck, 1000);
	},
	methods: {
		debouncedJSONCheck() {
			try {
				const res = JSON.parse(this.model.eventData.body);
				if (res) {
					this.isValidJson = true;
				} else {
					this.isValidJson = false;
				}
			} catch(err) {
				this.isValidJson = false;
			}
		},
		event() {
			this.$emit('event');
		},
	},
});

</script>
