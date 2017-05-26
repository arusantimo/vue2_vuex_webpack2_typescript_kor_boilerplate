<template>
  <div>
    <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions }  from 'vue';
interface IState extends Vue {
  counter: number;
  initialCounter: number;
}
export default {
  props: {
    'initialCounter': {
      type: Number,
		}
	},
  data: function () {
    return {
      counter: this.initialCounter,
    }
  },
  methods: {
    increment(): void {
      this.counter ++;
    },
    decrement(): void {
      if (this.counter > 1) {
        this.counter--;
      }
    },
  },
} as ComponentOptions<IState>
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>