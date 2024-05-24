<template>
    <div class="pink lighten-3 pa-4 ma-2">
      <h2>id page</h2>
      <div class="yellow lighten-4 pa-2 ma-2">
        <p> {{$route.params.id}}</p>
        <p>{{ $store.state.selectedPost.title }}</p>
      </div>
    </div>
</template>

<script>
  export default {
  validate({params}) {
      return !isNaN(params.id);
  },

  fetch({ $axios, store, params }) {
    if (store.state.selectedPost && store.state.selectedPost.id == params.id) return true;
    return $axios.$get(`/posts/${params.id}`).then(res => {
      store.commit("updateSelectedPost",res)
    })
  },


  }
</script>
