<template>
  <div class="merchandise-section">
    <a class="title-header">
      <h2 class="title flex-item">
        {{title}}
      </h2>
      <div class="push"></div>
      <div class="header-tail flex-item">
        <h4>Shop {{info.meta.total_count}} items</h4>
      </div>
    </a>
    <div class="content">
      <ul>
        <ol class="item-container" v-for="item in info.products">
    
            <div class="thumbnail" :style="{'background-image': `url(${item.previewImageUrl})`}">

            </div>
            <div class="description flex-column-item">
              <strong>{{item.currency}} {{item.price}}</strong>
              <h4>{{item.title}}</h4>
              <h4>{{item.size}}</h4>

              <button class="action-text-button bottom-right">
                  Add to cart
              </button>
            </div>

        </ol>
      </ul>
    </div>
  </div>
</template>

<script>
  import { get } from '../testdata/MerchandiseSection';

  export default {
    name: 'MerchandiseSection',
    props: ['title'],
    data() {
      return {
        info: {
          ...get(),
        },
      };
    },
  };
</script>

<style lang="scss" scoped>

  @import '../assets/common.scss';
  @import '../assets/button.scss';
  .content {
    > ul {
      display: flex;
      flex-direction: row;
    }
    overflow-x: hidden;
  }
  .item-container {
    min-width: 180px;
    height: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    $BOX_SHADOW_COLOR: #ccc;
    transition: box-shadow 0.5s;
    padding-top: 20px;
    &:hover {
      box-shadow:5px 2px 5px $BOX_SHADOW_COLOR, -5px 2px 5px $BOX_SHADOW_COLOR;
    }
    .description {
      padding: 5px 5px;
    }
  }
  .title-header {
    color: white;
    display: flex;
    width: 100%;
    background-color: rgb(0, 35, 93);
    padding: 14px 20px;
    box-sizing: border-box;
  }
  .item-start {
    padding-left: 20px;
  }
  .item-end {
    padding-right: 20px;
  }
  .header-tail {

  }
  .thumbnail {
    width: 106px;
    height: 146px;
    background-size: contain;
    background-repeat: no-repeat;
    align-self: center;
    background-position: center center;
  }

  .title {
    height: 100%;
  }
  .merchandise-section {
    margin: 0px 120px;
  }
</style>
