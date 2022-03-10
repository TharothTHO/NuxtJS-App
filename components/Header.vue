<template>
  <div class="bg-gray-100 font-display">
    <div>
      <div class="flex justify-between bg-green-700 p-7 border-violet-600 p-3">
        <nuxt-link class="text-slate-50 font-bold text-3xl" to="/">My Blog Posts</h1></nuxt-link>
        <AppSearchInput />
        <nuxt-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/auth/signin" target="_blank">
          Sign In
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.font-display {
  font-family: "Hubballi", cursive;
}
.btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>