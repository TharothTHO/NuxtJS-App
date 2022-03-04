export const state = () => ({
    articles: [],
});
export const actions = {
    // function here
    async getArticle({commit}) {
        const articles = await this.$content('articles')
          .only(['title', 'description', 'img', 'slug', 'author'])
          .sortBy('createdAt', 'asc')
          .fetch()
          /* console.log(articles) */
        commit("SET_ARTICLES",articles)
        console.log(articles)
      }
};
export const getters = {
    articles(state) {
        return state.articles;
    },
};
export const mutations = {
    SET_ARTICLES(state, articles) {
        state.articles = articles;
    }
};