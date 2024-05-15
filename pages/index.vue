<template>
  <div class="yellow lighten-3 pa-8">
    <v-row  >
      <v-col xs12 sm8 md6 v-for="post in $store.state.posts" :key="post.id" >
        <post-card :post="post"></post-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title:"Home"
  },
  fetch({$axios,store}) {
    return $axios.$get("/posts").then(res => {
      store.commit("updatePosts",res)
    })
  },
}
</script>
