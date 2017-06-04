
<template>
  <div class="shopping-cart flex-column-item flex-secondary-center">
    <ol class="steps flex-item ">
      <li :class="{'step-doing': stepIdx === 0}"><h3>購物車</h3></li>
      <span> > </span>
      <li :class="{'step-doing': stepIdx === 1}"><h3>確認訂單</h3></li>
      <span> > </span>
      <li :class="{'step-doing': stepIdx === 2}"><h3>付款</h3></li>

    </ol>
    <shopping-cart-content :cartItems="items" v-if="stepIdx === 0"></shopping-cart-content>
    
    <div v-if="items.length !== 0">
      <button class="rounded primary-button fat-border" @click="prev">Prev</button>
      <button class="rounded primary-button fat-border" @click="next">Next</button>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ShoppingCartContent from './ShoppingCartContent';

  export default {
    name: 'ShoppingCart',
    components: {
      ShoppingCartContent,
    },
    data() {
      return {
        steps: ['購物車', '確認訂單', '付款'],
        stepIdx: 0,
      };
    },
    computed: {
     /* ...mapState({
        items: state => (state.shoppingCart.cartItems),
      }),*/
      ...mapGetters({
        items: 'getCartItems',
      }),
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
  .steps + * {
    margin-top: 20px;
  }
  ol {
    list-style-type: none;
    margin-top: 20px;
    li {
      padding: 0px 20px;
    }
    li + span {
      margin: 0px 10px;
    }
  }
  .step-doing {
    border: 1px solid black;
  }
  .shopping-cart {
  
  }
</style>
