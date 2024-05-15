<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="green lighten-2 pa-2 ma-2" >
        <v-card-title class="headline">
            Home
        </v-card-title>
      </v-card>

      <v-card class="blue lighten-2 pa-2 ma-2" v-for="post in $store.state.posts" :key="post.id">
         <post-card :post="post"></post-card>
      </v-card>

    </v-col>
  </v-row>
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
