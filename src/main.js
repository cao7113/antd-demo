import Vue from 'vue'
// import Button from "ant-design-vue/lib/button";
// import Antd from "ant-design-vue/lib/button";
// import "ant-design-vue/dist/antd.css";
// Vue.use(Antd)

// help by babel, has bug
import { Button, Layout } from 'ant-design-vue';

Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);

import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
