<template>
  <div class="flex">
    <img class="object-cover h-20 w-20" :src="author.image" />
    <div class="text-2xl text-cyan-400 pl-4">
      <h4>Author : </h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>