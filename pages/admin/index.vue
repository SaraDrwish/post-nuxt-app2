<template>
  <div class="red lighten-4 pa-8 ma-2" >
    <h2 class="my-4">Admin</h2>
    <v-row>
      <v-col xs12 sm8 md6 class="blue lighten-2 pa-2 ma-2" v-for="post in $store.state.posts" :key="post.id" >
        <v-card >
          <post-card :post="post" :is-admin="true"></post-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'admin',
  head: {
    title:"Admin"
  },
  fetch({$axios,store}) {
    return $axios.$get("/posts").then(res => {
      store.commit("updatePosts",res)
    })
  },
}
</script>
