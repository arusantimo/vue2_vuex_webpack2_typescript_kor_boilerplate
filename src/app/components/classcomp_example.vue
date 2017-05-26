<template>
  <div v-bind:style="styleObject">
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  props: {
    propMessage: String,
    styleObject: Object
  }
})
export default class ClasscompExample extends Vue {
  styleObject?: {
    [key: string]: string | any;
  };
  propMessage: string
  // inital data
  msg: number = 123
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // lifecycle hook
  mounted () {
    this.greet()
  }
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
  // method
  greet () {
    console.log('greeting: ' + this.msg);
  }
}
</script>