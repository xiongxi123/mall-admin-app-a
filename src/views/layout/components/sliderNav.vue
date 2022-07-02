<template>
  <div class="main-header">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>商品</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">商品列表</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <li class="user-name">
        {{$store.state.user.username}}
        <a-icon type="down" />
      </li>
      <li class="login-out">退出</li>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>