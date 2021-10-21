<template>
  <div class="">
    <NavBar
      :title="title"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon v-if="rightIcon" :name="rightIcon" size="18" />
        <van-image v-if="rightImage" :src="rightImage" />
        <svg-icon v-if="rightSvgIcon" :iconClass="rightSvgIcon" />
        <slot name="right"></slot>
      </template>
    </NavBar>
  </div>
</template>

<script>
import { NavBar, Image as VanImage, Icon } from "vant";
export default {
  name: "nav-bar",
  components: {
    NavBar,
    VanImage,
    VanIcon: Icon,
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
    rightImage: {
      type: String,
      default: "",
    },
    rightIcon: {
      type: String,
      default: "",
    },
    rightSvgIcon: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClickLeft() {
      this.$emit("click-left");
    },
    onClickRight() {
      this.$emit("click-right");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
