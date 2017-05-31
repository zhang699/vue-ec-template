
<template>
  <div>
    <status-button :text="text" :disabled="false" @click="click"></status-button>
  </div>
</template>

<script>
  import StatusButton from '@/components/StatusButton';

  export default {
    name: 'SubmitButton',
    props: ['text'],
    components: {
      StatusButton,
    },
    data() {
      return {
        isRequesting: true,
      };
    },
    methods: {
      click() {
        if (this.isRequesting) {
          this.$emit('click', {});
        }
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>
