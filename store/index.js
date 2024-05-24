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
    addPost({ state, commit }, payload) {
      // const post = { ...payload, id:state.posts.length + 1 };
      return this.$axios.$post(`/posts/`, payload).then((res) => {
        commit("updatePosts", [...state.posts, res]);
      });
    },
  },
};
