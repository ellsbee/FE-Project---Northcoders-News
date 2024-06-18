import { useState, useEffect } from "react";
import { getArticles } from '../Utils/api'
import ArticleCard from './ArticleCard'

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data.articles)
        })
    }, [])

    return (
        <section>
            <ul id="article" className="article-list">
                {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
            </ul>
        </section>
    )
}

export default ArticleList;