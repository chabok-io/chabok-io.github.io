<template>
	<c-card>
		<c-row>
			<h4 class="title">
				User Attribute
			</h4>
		</c-row>
		<form>
			<c-input
				v-model="model.userAttrData.key"
				:disabled="!initialized"
				placeholder="Key"
				class="mb-4"
				fluid
			/>
			<c-input
				v-model="model.userAttrData.value"
				:disabled="!initialized"
				placeholder="Value"
				class="mb-4"
				fluid
			/>

			<c-button
				:disabled="disableSubmit"
				variant="primary"
				block
				@click="onSendAttribute"
			>
				Send
			</c-button>
		</form>
	</c-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CRow, CCard, CInput, CButton } from './ui';

export default defineComponent({
	name: 'UserAttributeView',
	components: {
		CRow,
		CCard,
		CInput,
		CButton,
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
	emits: ['update:modelValue', 'attribute'],
	computed: {
		model: {
			get(): any {
				return this.modelValue;
			},
			set(newVal: object): void {
				this.$emit('update:modelValue', newVal);
			},
		},
		disableSubmit(): Boolean {
			const { key, value } = this.model.userAttrData;
			if (!key || !value) {
				return true;
			}
			return false;
		},
	},
	methods: {
		onSendAttribute() {
			this.$emit('attribute');
		},
	},
});

</script>
