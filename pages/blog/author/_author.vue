<template>
<div class="bg-zinc-300">
    <div class="p-10">
      <h1>Author: {{ articles[0].author.name }}</h1>
      <p>Bio: {{ articles[0].author.bio }}</p>
      <h3>Here are a list of articles that have been written by{{ articles[0].author.name }}.</h3>
    </div>

    <div class="grid lg:grid-cols-3 gap-10 p-10 bg-zinc-300 h-full">
    <div v-for="article in articles" :key="article.slug" >
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h3 class="p-5">{{ article.title }}</h3>
          <nuxt-img :src="article.img" width="250px" :alt="article.alt" />
          <div>
            
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
          </div>
        </NuxtLink>
      </div>    
    </div>
  </div>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .where({
          'author.name': {
            $regex: [params.author, 'i']
          }
        })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
  }
</script>

<style scoped>

</style>