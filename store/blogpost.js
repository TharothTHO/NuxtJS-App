export const state = () => ({
  blog: [],
});
export const actions = {
  // function here
  async getBlog({ commit }, params) {
    const blog = await this.$content("articles", params.slug).fetch();
    commit("SHOW_BLOG", params.slug);
  },
};
export const getters = {
  blog(state) {
    return state.blog;
  },
};
export const mutations = {
  SHOW_BLOG(state, blog) {
    state.blog = blog;
  },
};
