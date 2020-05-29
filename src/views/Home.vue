<template>
  <div v-loading="loading" :style="'height:' + height">
    <iframe :src="src" frameborder="no" style="width: 100%;height: 100%" scrolling="auto"/>
  </div>
</template>

<script lang="ts">
import {Prop, Component, Vue} from "vue-property-decorator";

@Component
export default class Home extends Vue{

  @Prop() private src = 'localhost:8080/';
  @Prop() private height = document.documentElement.clientHeight - 94.5 + 'px;';
  @Prop() private loading = true;

  mounted() {
      setTimeout(() => {
          this.loading = false;
      }, 230);
      let that: this;
      window.onresize = function temp() {
          that.height = document.documentElement.clientHeight - 94.5 + 'px;'
      }
  }

}
</script>
