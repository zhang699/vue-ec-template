<template>
  <div class="wrapper flex-column-item flex-primary-center flex-secondary-center">
    <div class="login-container flex-column-item flex-primary-center flex-secondary-center">
      <h2>Welcome back</h2>

      <input class="form-input match-parent" value="" placeholder="Email"/>
      <input class="form-input match-parent" value="" placeholder="Password"/>
      
      <submit-button class="submit-button match-parent" :text="'LOG IN'"/>

      <div class="help match-parent">
        
        <button class="action-text-button">Forgot Password</button>

        <div class="push" />
        <h6 class="center-vertical">New to honestbee</h6>
        <button class="action-text-button">Sign up</button>
      </div>
    </div>
  </div>

</template>

<script>
  import SubmitButton from '@/components/SubmitButton';

  export default {
    name: 'Login',
    components: {
      SubmitButton,
    },
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/input.scss';
  .login-container {
    height: 400px;
    width: 450px;
  }
  .form-input {
    @extend .form-input;
  }
  .submit-button {
  }

  .action-text-button {
    @extend .action-text-button;
    height: 40px;
  }
  .help {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>

