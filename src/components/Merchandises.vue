<template>
  <div class="merchandises">
      <landing-page />

      <h1>Super Markets </h1>
      <merchandise-section title="Ben's Independent Grocer"></merchandise-section>
  </div>
</template>

<script>
import LandingPage from './LandingPage';
import MerchandiseSection from './MerchandiseSection';

export default {
  name: 'Merchandises',
  components: {
    LandingPage,
    MerchandiseSection,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.merchandises {

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
