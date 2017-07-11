<template>
  <div class="nav-bar">
    <div class="info">
      {{ buildTime}}
    </div>
    <div class="nav-bar-content">
      <div class="logo">
        <h2>Fake HonestBee</h2>
      </div>
      <div class="content center-vertical">
        <div class="store center-vertical">
          <button class="text-button strong h3">Store</button>
        </div>
        <div class="push"></div>

        
        <div class="shopping-cart center-vertical close-to-full-height">
          
        </div>

        <div class="address center-vertical">
          <button class="text-button strong h4">Enter Address</button>
        </div>

      </div>
      <div class="control">
        
        <router-link :to="{ name: 'ShoppingCart'}"
                    class="router-link center-vertical">
          <button class="rounded secondary-button match-parent shopping-cart">({{numberOfShopping}})ShoppingCart</button>
        </router-link>

        <router-link :to="{ name: 'Login'}" class="router-link center-vertical">
          <button class="rounded secondary-button fat-border">Log In</button>
        </router-link>
        
        <router-link :to="{ name: 'Register'}" class="router-link center-vertical">
          <button class="rounded primary-button fat-border">Sign Up</button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  const { buildTime } = process.env;
  export default {
    name: 'NavBar',
    data() {
      return {
        buildTime,
      };
    },
    created() {
      console.warn('info.buildTime', buildTime);
    },
    computed: {
      ...mapGetters({
        numberOfShopping: 'numberOfMerchandisesInCart',
      }),
    },
  };
</script>

<style lang="scss">

  @import '~scss-utils/scss-utils.scss';
  @import '../assets/theme.scss';
  @import '../assets/common.scss';
  @import '../assets/button.scss';


  .nav-bar {
    position: fixed;
    background-color: #fff;
    top: $progress-bar-height;
    z-index: 99;
    height: $nav-bar-height;
    width: 100%;
    .info {
      position: fixed;
      top: 0;
      right: 0;
    }
    .nav-bar-content {
       display: flex;
       margin: 0 120px;
       height: 100%;
      .content {
        flex: 1;
        .address {
          height: 100%;
        }
      }

    }
    .logo {

    }

    .control {
      display: flex;
      align-items: center;

      button {
        height: 90%;
        width: 100px;
      }
      .shopping-cart {
        width: 300px;
      }
    }
  }
  .nav-bar + * {
    margin-top: $nav-bar-height;
  }
</style>
