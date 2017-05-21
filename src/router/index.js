import Vue from 'vue';
import Router from 'vue-router';
import Merchandises from '@/components/Merchandises';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Merchandises',
      component: Merchandises,
    },
  ],
});
