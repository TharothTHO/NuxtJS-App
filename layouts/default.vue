<template>
    <div class="bg-gray-100 font-display">
        <div>
            <div class="flex justify-between bg-green-700 p-7 border-violet-600 p-3 ">
            <h1 class="text-slate-50 font-bold text-3xl ">My Blog Posts</h1>
            <AppSearchInput />
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<script>
export default {

}
</script>

<style>
.font-display {
  font-family: 'Hubballi', cursive;
}
</style>