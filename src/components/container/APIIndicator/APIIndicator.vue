<template>
  
  <div class="api-indicator">
    <div class="progress-bar" :style="getProgressBarStyle()" />
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import { PROGRESS_DONE, PROGRESS_START, PROGRESS_STOP } from './modules/progressType';

  const STOP_PROGRESS_PERCENTAGE = 66;
  const STEP_PROGRESS_PERCENTAGE = 5;
  const RESET_PROGRESS_TIMEOUT = 300;
  const PROGRESS_STEP_INTERVAL = 300;
  export default {
    name: 'APIIndicator',
    data() {
      return {
        progress: 0,
      };
    },
    computed: {
      ...mapState({
        progressType: state => state.APIIndicator.progressType,
      }),
    },
    watch: {
      progressType(progressType) {
        if (progressType === PROGRESS_START) {
          const isProgressAlreadyStart = this.taskId >= 0;
          if (isProgressAlreadyStart) {
            clearInterval(this.taskId);
            this.taskId = -1;
            this.progress = 0;
          }
          this.taskId = setInterval(() => {
            if (this.progress < 100 && this.progress <= STOP_PROGRESS_PERCENTAGE) {
              this.progress += STEP_PROGRESS_PERCENTAGE;
            } else if (this.progress === 100) {
              this.progress = 0;
            }
          }, PROGRESS_STEP_INTERVAL);
        } else if (progressType === PROGRESS_STOP) {
         // do nothing
        } else if (progressType === PROGRESS_DONE) {
          this.progress = 100;
          clearInterval(this.taskId);
          this.taskId = -1;
          setTimeout(() => {
            this.progress = 0;
          }, RESET_PROGRESS_TIMEOUT);
        }
      },
    },
    methods: {
      getProgressBarStyle() {
        return {
          width: `${this.progress}%`,
          display: `${this.progress === 0 ? 'none' : ''}`,
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../../assets/theme.scss';
  .progress-bar {
    background-color: $progress-bar-color;
    height: $progress-bar-height;
    transition: width 0.3s;
  }
  .api-indicator {
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    height: $progress-bar-height;
    background-color: white;
  }
</style>
