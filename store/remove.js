export const RemoveArticle = ({commit}, article) => {
    commit('REMOVE_ARTICLE', articles.slug );
}
export const REMOVE_ARTICLE = (state , articleID) => {
    let articless = state.articless.filter(articles => articles.id != articleID)
    state.articless = articless ;
}