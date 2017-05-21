<template>
  <section class="landing-page">
    <div class="landing-cover">

      <a v-for="position in positions" class="target-page" :style="{ 'background-image': `url(${position.image})`, 
      'top': `${position.top}`, 
      'left': `${position.left}`,
      'display': `${position.isHide ? 'none': 'block'}`}">
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'LandingPage',
    created() {
      this.taskId = setInterval(() => {
        this.slideLandingToLeft();
      }, 3000);
    },
    destroyed() {
      clearInterval(this.taskId);
    },
    methods: {
      slideLandingToLeft: function() {
        function shiftLeft(left) {
          if (left === '0%') {
            return '-100%';
          } else if (left === '100%') {
            return '0%';
          } else if (left === '200%') {
            return '100%';
          } else if (left === '-100%') {
            return '100%';
          }
          return '0%';
        }
        this.positions = this.positions.map((position) => {
          return {
            ...position,
            left: shiftLeft(position.left),
            //isHide: position.left === '-100%',
          };
        });
      },
    },
    data() {
      return {
        positions: [
          {
            top: 0,
            left: '0%',
            image: 'https://assets.honestbee.com/home_banners/en/1440/MY_SBRM5.jpg',
          },
          {
            top: 0,
            left: '100%',
            image: 'https://assets.honestbee.com/home_banners/en/1440/MY_NZFair.jpg',
          },
          {
            top: 0,
            left: '-100%',
            image: 'https://assets.honestbee.com/home_banners/en/1440/MY_BENTEN.jpg',
          },
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>
  .landing-page {
    height: 250px;
    width: 100%;

    .landing-cover {
      width: 100%;
      height: 100%;
      position: relative;


      > a {
        position: absolute;
        display: block;
        transition: left 1s;

        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

    }

  }

</style>

