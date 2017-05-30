
<template>
  <div>
    <button @click="click" :class="{ disabled: isRequesting}" class="rounded primary-button fat-border button disabled-button">{{text}} </button> 
  </div>
</template>

<script>
  export default {
    name: 'SubmitButton',
    props: ['text'],
    data() {
      return {
        isRequesting: true,
      };
    },
    methods: {
      click() {
        if (!this.isRequesting) {
          this.$emit('click', {});
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/button.scss';

  .button {
    width: 100%;
    height: 40px;
  }
</style>
