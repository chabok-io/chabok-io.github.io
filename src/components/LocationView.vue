<template>
	<c-card>
		<c-row>
			<h4 class="title">
				Update Location
			</h4>
		</c-row>
		<form>
			<c-input
				v-model="model.locationData.lat"
				:disabled="!initialized"
				type="number"
				placeholder="Latitude"
				class="mb-4"
				fluid
			/>
			<c-input
				v-model="model.locationData.lan"
				:disabled="!initialized"
				type="number"
				placeholder="Longitude"
				class="mb-4"
				fluid
			/>
			<c-button
				:disabled="checkLocation"
				variant="primary"
				block
				@click="onSendLocation"
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
	name: 'LocationView',
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
	emits: ['update:modelValue', 'location'],
	computed: {
		model: {
			get(): any {
				return this.modelValue;
			},
			set(newVal: object): void {
				this.$emit('update:modelValue', newVal);
			},
		},
		checkLocation(): Boolean {
			const { lat, lan } = this.model.locationData;
			return !lat || !lan;
		},
	},
	methods: {
		onSendLocation() {
			this.$emit('location');
		},
	},
});

</script>
