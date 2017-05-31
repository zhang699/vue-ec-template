
<template>
  <div>
    <button @click="click"
            :class="{ 'disabled-button': disabled}"
            class="rounded primary-button fat-border button">{{text}} </button>
  </div>
</template>

<script>
export default {
  name: 'StatusButton',
  props: ['text', 'disabled'],
  data() {
    return {
    };
  },
  methods: {
    click() {
      this.$emit('click', {});
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
