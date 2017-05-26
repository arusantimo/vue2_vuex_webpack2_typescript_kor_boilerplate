import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  Welcome,
  PageWrapper
} from '@/app/containers';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageWrapper',
      component: PageWrapper,
      children: [
        {
          // /user/:id/profile 과 일치 할 때
          // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
          path: 'welcome',
          component: Welcome
        }
      ]
    },
  ]
});


