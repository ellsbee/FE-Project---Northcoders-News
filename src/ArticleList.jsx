import { useState, useEffect } from "react";
import { getArticles } from '../Utils/api'
import ArticleCard from './ArticleCard'

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data.articles)
            console.log(data.articles)
        })
    }, [])

    return (
        <section>
            <ul id="article" className="article-list">
                {articles.map((articles) => {
                return <ArticleCard articles={articles} key={articles.title}/>
            })}
            </ul>
        </section>
    )
}

export default ArticleList;