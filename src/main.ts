import { createApp } from 'vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import { createI18n } from 'vue-i18n';
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

import App from './App.vue';
import './styles/base.scss';

// Router
import { Router } from '/@/router';

// i18n
import messages from '@intlify/vite-plugin-vue-i18n/messages';

const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App);

const VueDynamicForms = createDynamicForms();

app.use(i18n);

app.use(Router);

app.use(VueDynamicForms);

app.mount('#app');
