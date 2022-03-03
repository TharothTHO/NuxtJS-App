<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="font-bold text-primary hover:underline box-border h-20 w-auto p-4 border-4 bg-green-200"
    ><span>&#8656;</span>
      {{ prev.title }}
      
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline box-border h-20 w-auto p-4 border-4 bg-green-200"
    >
      {{ next.title }}
      <span>&#8658;</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>