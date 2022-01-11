declare module '@vue/runtime-core' {
	interface ToastAction {
		label: string;
		onClick: () => void;
	}

	interface ToastOptions {
		title?: string;
		duration?: number;
		onClose?: (t: ToastOptions) => void;
		icon?: string | false;
		actions?: ToastAction[]
	}

	export interface ComponentCustomProperties {
		$toast: {
			info: (message: string, options?: Partial<ToastOptions>) => void,
			success: (message: string, options?: Partial<ToastOptions>) => void,
			warning: (message: string, options?: Partial<ToastOptions>) => void,
			danger: (message: string, options?: Partial<ToastOptions>) => void,
		},
	}
}

export {};
