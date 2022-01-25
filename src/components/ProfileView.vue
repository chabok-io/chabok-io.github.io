<template>
	<c-card class="mb-4">
		<c-row>
			<h4 class="title">
				Profile
			</h4>
		</c-row>
		<form>
			<c-select
				v-model="model.profileData.gender"
				:options="genderOptions"
				:disabled="!initialized"
				label="Gender"
				class="mb-2"
				inline
				fluid
			/>
			<c-input
				v-model="model.profileData.email"
				:disabled="!initialized"
				placeholder="Email"
				class="mb-4"
				fluid
			/>

			<c-input
				v-model="model.profileData.phoneNumber"
				placeholder="Phone number"
				:disabled="!initialized"
				class="mb-4"
				fluid
			/>
			<c-input
				v-model="model.profileData.timezone"
				:disabled="!initialized"
				placeholder="Timezone"
				class="mb-4"
				fluid
			/>
			<c-input
				v-model="model.profileData.name"
				:disabled="!initialized"
				placeholder="Name"
				class="mb-4"
				fluid
			/>
			<c-input
				v-model="model.profileData.family"
				:disabled="!initialized"
				placeholder="family"
				class="mb-4"
				fluid
			/>
			<c-input
				v-model="model.profileData.birthDate"
				:disabled="!initialized"
				placeholder="Name"
				class="mb-4"
				type="date"
				fluid
			/>
			<c-button
				:disabled="!initialized"
				variant="primary"
				block
				@click="profile"
			>
				Send
			</c-button>
		</form>
	</c-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CRow, CButton, CInput, CCard, CSelect } from './ui';

export default defineComponent({
	name: 'ProfileView',
	components: {
		CRow,
		CButton,
		CInput,
		CSelect,
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
	emits: ['update:modelValue', 'profile'],
	data() {
		return {
			genderOptions: [
				{
					title: 'Male',
					value: 'male',
				},
				{
					title: 'Female',
					value: 'female',
				},
			],
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
		profile() {
			this.$emit('profile');
		},
	},
});

</script>
