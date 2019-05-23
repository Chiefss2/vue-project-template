<template>
  <div class="counter">
    <span>count: {{ count }}</span>
    <button @click="handleClick">count++</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++;
      this.$emit('change', this.count);
    }
  }
}
</script>

<style>

</style>
