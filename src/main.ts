/**
 * This file is served as playground in development and won't bundled in production.
 * Feel free to do anything here.
 * Also, we suggest you to discard any changes, before commit your changes.
 */

import { createApp } from 'vue';
import App from './App.vue';
import PluginsInstaller from '@/lib/plugins';
import '@chabok/ui/dist/style.css';
import '@chabok/ui/dist/icons/icons.css';
import './style.css';

const VueApp = createApp(App);

VueApp.use(PluginsInstaller);

VueApp.mount('#app');
