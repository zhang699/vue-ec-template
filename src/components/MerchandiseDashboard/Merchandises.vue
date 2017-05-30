<template>
  <div class="merchandises">
      <landing-page />

      <h1>Super Markets </h1>
      <merchandise-section :waiting="waiting" :products="ecProducts" title="Ben's Independent Grocer"></merchandise-section>
  </div>
</template>

<script>
import LandingPage from '../LandingPage';
import MerchandiseSection from '../MerchandiseSection';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Merchandises',
  components: {
    LandingPage,
    MerchandiseSection,
  },
  created() {
    this.getMerchandise();
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      waiting: state => (state.merchandiseDashboard.ecProductsWaiting),
      ecProducts: state => (state.merchandiseDashboard.ecProducts),
    }),
  },
  methods: {
    ...mapActions([
      'getMerchandise',
    ]),
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
