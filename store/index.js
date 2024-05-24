export default {
  state: () => ({
    posts: [],
    selectedPost: {},
  }),
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updateSelectedPost(state, posts) {
      state.selectedPost = posts;
    },
  },
  actions: {
    deletePost({ state, commit }, PostId) {
      return this.$axios.$delete(`/posts/${PostId}`).then(() => {
        commit(
          "updatePosts",
          state.posts.filter((post) => post.id != PostId)
        );
      });
    },
  },
};
