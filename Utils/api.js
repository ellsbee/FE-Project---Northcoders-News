import axios from "axios";

export function getArticles() {
    return axios
    .get("https://ellsbees-nc-news.onrender.com/api/articles")
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log('there was a problem retrieving the article list', err)
    })
}

export function getArticleById(article_id) {
    return axios
    .get(`https://ellsbees-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log('there was a problem retrieving the article', err)
    })
}

export function getAllArticleComments(article_id) {
    return axios
    .get(`https://ellsbees-nc-news.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log('there was an error retrieving the comments for this article', err)
    })
}

export function voteOnArticle(article_id, vote) {
    return axios
    .patch(`https://ellsbees-nc-news.onrender.com/api/articles/${article_id}`, {inc_votes: vote})
    .then((response) => {
        return response.data.votes
    })
    .catch((err) => {
        console.log('unable to count vote', err)
    })
}