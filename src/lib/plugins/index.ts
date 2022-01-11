import { Plugin } from 'vue';
/// @ts-ignore
import { ToastPlugin } from '@chabok/ui';

const PluginsInstaller: Plugin = {
	install(app) {
		app.use(ToastPlugin);
	},
};

export default PluginsInstaller;
