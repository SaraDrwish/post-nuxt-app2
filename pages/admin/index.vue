<template>
  <div class="blue lighten-5 pa-6 ma-2" >
    <h2 class="my-4">Admin</h2>
    <div class="mb-8">
      <v-btn to="/admin/post/add" color="primary">Add Post</v-btn>
    </div>
    <v-row dense >
      <v-col cols="12" md="4"
          class="blue lighten-2 pa-2 my-2 mx-auto" v-for="post in $store.state.posts" :key="post.id" >
        <v-card max-width="350" class="mx-auto ">
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
