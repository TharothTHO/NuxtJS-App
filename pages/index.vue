<template>
  <div>
    <ul class=" grid grid-cols-3 gap-6 p-10">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="p-10 bg-green-200 h-100 pb-5">
            <nuxt-img class="mx-auto pb-4" :src="article.img" />
            <h2 class="text-3xl font-bold">{{ article.title }}</h2>
            <p class="text-2xl">by {{ article.author.name }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    computed:{
      ...mapGetters({
        articles: "article/articles",
      })
    },
    mounted(){
      console.log(this.articles)
    }, 
    async asyncData({ $content, params, store }) {
      store.dispatch('article/getArticles')
    },
  }
</script>


<style scoped>

.font-display {
  font-family: 'Hubballi', cursive;
}

</style>
