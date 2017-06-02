
<template>
  <div class="shopping-cart flex-column-item flex-secondary-center">
    <ol class="step flex-item ">
      <li v-for="step in steps" :class="{'step-doing': stepIdx === steps.indexOf(step)}">{{step}}
      </li>
    </ol>
    <shopping-cart-content v-if="stepIdx === 1"></shopping-cart-content>
    <div>
      <button class="rounded primary-button fat-border" @click="prev">Prev</button>
      <button class="rounded primary-button fat-border" @click="next">Next</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        steps: ['購物車', '確認訂單', '付款'],
        stepIdx: 0,
      };
    },
    methods: {
      next() {
        if (this.stepIdx < this.steps.length - 1) {
          this.stepIdx += 1;
        }
      },
      prev() {
        if (this.stepIdx > 0) {
          this.stepIdx -= 1;
        }
      },
    },
  };
</script>


<style lang="scss" scoped>
  @import '../../assets/common.scss';
  @import '../../assets/button.scss';

  ol {
    list-style-type: none;
    margin-top: 20px;
    li:not(:last-child) {
      padding: 0px 20px;
      &::after {
        content: '>>';
        margin-left: 20px;
        font-size: 16px;
      };
    }
  }
  .step-doing {
    border: 1px solid black;
  }
  .shopping-cart {
  
  }
</style>
