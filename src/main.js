import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit,faTrash,faPlusCircle,fas } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit,faTrash,faPlusCircle,fas);

Vue.component('fa-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
