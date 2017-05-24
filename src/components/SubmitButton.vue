
<template>
  <div>
    <button class="rounded primary-button fat-border button">{{text}} </button> 
  </div>
</template>

<script>
  export default {
    name: 'SubmitButton',
    props: ['text'],
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: 100%;
    height: 40px;
  }
</style>
