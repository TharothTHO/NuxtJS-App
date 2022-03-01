<template>
  <div>
    <div class="post-head">
      <h1>{{article.title}}</h1>
      <img :src="article.image" v-if="article.image">
      <div>
        <div class="date">{{article.createdAt}}</div>
        <div class="tags">
          <span v-for="tag in article.tags" :key="tag">
            <nuxt-link :to="'/tag/'+tag">\#{{tag}}</nuxt-link>
          </span>
        </div>
      </div>
    </div>
    <nuxt-content :document="article" />
  </div>
</template>
<script>
  export default {
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>