<template>
  <div>
      <AdminContent />
      <Nuxt />
  </div>
</template>

<script>
import AntD from '~/plugins/antd-ui'
import AdminContent from '~/components/AdminContent.vue'
export default {
    created(){
        AntD()
    },
    components:{
        AdminContent,
    }
}
</script>

<style>

</style>