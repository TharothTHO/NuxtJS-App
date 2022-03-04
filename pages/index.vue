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
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>


<style scoped>

.font-display {
  font-family: 'Hubballi', cursive;
}

</style>
