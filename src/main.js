import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueCompositionAPI from '@vue/composition-api';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
