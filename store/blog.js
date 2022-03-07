export const state = () => ({
    article: [],
});
export const actions = {
    // function here
    async getBlog({commit}){
        const article = await this.$content('articles').fetch()
        commit("SHOW_BLOG",article)
        console.log(article)
      },

};
export const getters = {
    article(state) {
        return state.article;
    }
};
export const mutations = {
    SHOW_BLOG(state, article){
        state.article = article;
    }
};