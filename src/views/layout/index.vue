<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <div style="height:50px"></div>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to='/layout/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to='/layout/QA'>问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to='/layout/video'>视频</van-tabbar-item>
      <van-tabbar-item icon="user-o" to='/layout/my'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
// less兼容css
<style scoped lang="less">
</style>