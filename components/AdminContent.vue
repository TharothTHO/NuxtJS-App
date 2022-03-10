<template>
  <a-layout id="components-layout-demo-fixed" class="font-display">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo"> 
        <h1 class="text-slate-50 font-bold text-2xl text-center">My Blog Posts</h1>
        <v-btn class="float-right" @click="$router.push('/auth/signout')">Logout</v-btn>
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
        <table class="border-collapse border border-slate-400">
          <thead>
            <tr class="text-2xl">
              <th class="border border-slate-500">Title</th>
              <th class="border border-slate-500">Author</th>
              <th class="border border-slate-500">Description</th>
              <th class="border border-slate-500">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article of articles" :key="article.slug">
              <td class="border border-slate-300 max-w-md">{{ article.title }}</td>
              <td class="border border-slate-300 max-w-xs">{{ article.author.name }}</td>
              <th class="border border-slate-300 max-w-lg">{{ article.description }}</th>
              <th class="border border-slate-300 max-w-xs w-48">
                <button class="box-border h-10 w-40 border-4 bg-blue-500 text-white">Edit</button>
                <button class="box-border h-10 w-40 border-4 bg-red-500 text-white">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  async fetch({ $content, params }) {
    this.articles = await this.$content("articles")
      .only(["title", "description", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 200px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.font-display {
  font-family: 'Hubballi', cursive;
}
</style>