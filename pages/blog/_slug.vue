<template>
  <div>
    <div class="p-8 grid grid-cols-3 gap-6">
      <div class="col-span-2">
        <h1 class="text-5xl font-bold text-center pt-6 pb-10 divide-x text-blue-700">{{ article.title }}</h1>
        <author :author="article.author" />
        <p class="pt-4">Article last updated: {{ formatDate(article.updatedAt) }}</p>
        <nuxt-img class="mx-auto pt-6" :src="article.img" :alt="article.alt" />
        <p>{{ article.description }}</p>
        <nuxt-content :document="article" />
      </div>
      <div>
        <div class="pb-4">
        <h1>Recomment Blogs Post : </h1>
        </div>
        <ul class="">
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <div class="">
                <nuxt-img class="" :src="article.img" />
                <h2 class="d">{{ article.title }}</h2>
                <p class="pb-6">by {{ article.author.name }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="pb-10">

      <prev-next :prev="prev" :next="next" />

    </div>
    </div>
    
   

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
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        article,
        prev,
        next,
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
  .font-display {
  font-family: 'Hubballi', cursive;
}
  
</style>