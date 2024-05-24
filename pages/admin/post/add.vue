<template>
  <div class="yellow lighten-4 pa-1 mx-auto grey--text ">
    <h2>add post page</h2>
    <postForm></postForm>
  </div>
</template>

<script>
import postForm from '@/components/admin-components/post-form.vue'
  export default {
  components: { postForm },
  name: "add",
  data() {

    },
  }
</script>
