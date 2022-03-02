<template>
  <div class="block justify-center">
    <h1 class="text-center font-bold bg-green-600 p-7 border-violet-600 p-3">{{ article.title }}</h1>
    <img class="mx-auto" :src="article.img" :alt="article.alt" />
    <p class="text-center font-medium">{{ article.description }}</p>
    <p class="text-center font-medium">Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />

    <author :author="article.author" />

    <prev-next :prev="prev" :next="next" />
    
   

  </div>
</template>
<script>
  export default {
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
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

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  
</style>