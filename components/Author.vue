<template>
  <NuxtLink :to="`/blog/author/${author.name}`">
  <nuxt-img :src="author.image" />
  <div>
    <h4>Author</h4>
    <p>{{ author.name }}</p>
    <p>{{ author.bio }}</p>
  </div>
</NuxtLink>
</template>

<script>
export default {

}
</script>

<style>

</style>