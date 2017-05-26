/*
vue-template-loader (@see https://github.com/ktsn/vue-template-loader)

This file tells Typescript to understand import statements which loads css, html or scss files
*/
/* tslint:disable:interface-name no-duplicate-imports */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module '*.html' {
  import Vue from 'vue'
  interface WithRender {
    <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const withRender: WithRender
  export = withRender
}

declare module '*.scss' {
  import Vue from 'vue'
  interface WithRender {
    <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const withRender: WithRender
  export = withRender
}

declare module '*.css' {
  import Vue from 'vue'
  interface WithRender {
    <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const withRender: WithRender
  export = withRender
}
