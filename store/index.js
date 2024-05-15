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
};
