import axios from "axios";

export function getArticles() {
    return axios
    .get("https://ellsbees-nc-news.onrender.com/api/articles")
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log('there was a problem retrieving the article', err)
    })
}