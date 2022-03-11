<template>
  <div>
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
                <button class="box-border h-10 w-40 border-4 bg-red-500 text-white" @click="RemoveArticle(article)">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    layout: 'admin',
    computed:{
      ...mapGetters({
        articles: "article/articles",
        views: 'getViews'
      })
    },
    mounted(){
      console.log(this.articles)
    }, 
    async asyncData({ $content, params, store }) {
      store.dispatch('article/getArticle')
    },
    methods: {
      RemoveArticle(article){
        this.$store.dispatch('RemoveArticle', article);
      }
    }
}
</script>

<style>

</style>