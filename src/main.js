// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*引入下面三行*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import formCreate from '@form-create/element-ui'
import VueCodemirror from 'vue-codemirror'
import jsonVue from 'json2vue'
// language
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/monokai.css'
import 'codemirror/lib/codemirror.css'

Vue.use(ElementUI);
Vue.use(VueCodemirror);
Vue.use(formCreate);
// Vue.use(jsonVue);
Vue.component('btn');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
