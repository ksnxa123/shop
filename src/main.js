import './assets/reset.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/rem'


import { Uploader,NavBar,Sidebar, SidebarItem,Tabbar, TabbarItem, CountDown,Grid, GridItem,Button ,Col, Row,Icon,Field,Search,Tab, 
  Sku,Tabs,Swipe, SwipeItem,GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(Search);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(CountDown);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(NavBar);
Vue.use(Sku);
Vue.use(Uploader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

