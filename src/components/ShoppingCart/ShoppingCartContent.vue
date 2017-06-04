<template>
  <div>
    <div class="advertise center-vertical center">
      <h4>這裏放個廣告，譬如全館商品，優質免運喔</h4>
    </div>
    <div class="empty-view" v-if="isCartEmpty()">
      <router-link :to="{name: 'Merchandises'}" class="router-link">
        <button class="primary-button">
          <h4>
            你的購物車是空的，趕緊去購物吧
          </h4>
        </button>
      </router-link>
    </div>
    <div class="shopping-content-list" v-if="!isCartEmpty()">
      <div class="head">
        <h4 class="column">商品名稱</h4>
        <h4 class="column small-column">單價</h4>
        <h4 class="column small-column">購買數量</h4>
        <h4 class="column small-column">每單位內含</h4>
        <h4 class="column small-column">小計</h4>
        <h4 class="column small-column">操作</h4>
      </div>
      <div class="body">
        <div class="item row" v-for="item in cartItems">
            <div class="column row space-around">
              <img :src="item.imageUrl" width="64" height="64" />
              <h4 class="name">{{item.name}}</h4>
            </div>
            <h4 class="column small-column">{{item.price}}</h4>
            <h4 class="column small-column">{{item.buyAmount}}</h4>
            <h4 class="column small-column">{{item.unit}}</h4>
            <h4 class="column small-column">{{item.subTotal}}</h4>
            <div class="column small-column">
              <button class="primary-button" @click="remove(item)">X
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['cartItems'],
    data() {
      return {
      };
    },
    methods: {
      remove(item) {
        this.removeCart(item.id);
      },
      ...mapActions([
        'removeCart',
      ]),
      isCartEmpty() {
        return this.cartItems.length === 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/common.scss';
  
  $HEAD_BODY_GAP: 20px;
  $ROW_GAP: 20px;
  .head, .row {
    @extend .flex-item;
    & + {
      margin-top :$HEAD_BODY_GAP;
    }
  }
  .advertise {
    height: 120px;
    width: 98vw;
    border: 1px solid black;
    & + * {
      margin-top: 20px;
    }
  }
  .column {
    .name {
      width: 80px;
    }
    margin: 0px 20px;
    width: 200px;
    &.small-column {
      width: 120px;
    }
  }
  .item + * {
    margin-top: $ROW_GAP;
  }
  
  .shopping-content-list {
    margin: 20px 0px;
  }
</style>
