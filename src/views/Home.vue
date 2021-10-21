<template>
  <div class="home">
    <v-nav-bar
      title="私桩预约"
      rightSvgIcon="icon"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </v-nav-bar>
    <van-uploader />
    <div style="" class="div">
      <svg-icon iconClass="icon" class="icon-class" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vNavBar from "@/components/nav-bar";
import { Uploader as vanUploader } from "vant";
export default {
  name: "Home",
  components: {
    vNavBar,
    vanUploader,
  },
  methods: {
    onClickLeft() {
      console.log("click");
    },
    onClickRight() {
      console.log("icon click");
    },
  },
};
</script>

<style lang="scss" scoped>
.div {
  height: 100px;
  width: 100px;
  border: 1px solid red;
  .icon-class {
    width: 16px;
    height: 16px;
  }
}
</style>
