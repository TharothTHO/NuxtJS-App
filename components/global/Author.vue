<template>
  <div>
    <img class="mx-auto" :src="author.image" />
    <div class="text-center font-medium text-fuchsia-500">
      <h4>Author</h4>
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