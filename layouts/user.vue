<template>
  <a-layout id="components-layout-demo-fixed" class="font-display">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo"> 
        <nuxt-link class="text-slate-50 font-bold text-3xl" to="/">My Blog Posts</nuxt-link>
        <v-btn class="float-right pt-2" @click="$router.push('/auth/signout')">Logout</v-btn>
      </div>
      <!-- <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          Dashboard
        </a-menu-item>
        <a-menu-item key="2">
          Authors
        </a-menu-item>
        <a-menu-item key="3">
          Profile
        </a-menu-item>
      </a-menu> -->
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item class="text-4xl">Dashboard</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
          <Nuxt />
        
      </div>

    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>


<script>
import AntD from '~/plugins/antd-ui'
export default {
    created(){
        AntD()
    },
}
</script>

<style>

</style>