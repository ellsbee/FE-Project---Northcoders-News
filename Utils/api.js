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

export function postComment(article_id, username, body) {
    return axios
    .post(`https://ellsbees-nc-news.onrender.com/api/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
        return data;
    });
};

export function deleteComment(comment_id) {
    return axios
    .delete(`https://ellsbees-nc-news.onrender.com/api/comments/${comment_id}`, { comment_id} )
    .then(({ data }) => {
        return data;
    });
};

export function getTopics() {
    return axios
    .get(`https://ellsbees-nc-news.onrender.com/api/topics`).then(({ data }) => {
    return data;
    });
};

export function getArticlesByTopic(slug) {
    return axios
    .get(`https://ellsbees-nc-news.onrender.com/api/articles?topic=${slug}`).then(({ data }) => {
    return data;
    });
};