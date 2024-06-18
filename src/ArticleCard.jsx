import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({article}) {
    console.log(article)
    return(
        <ul className="article-card">
            <Link to={`/article/${article.article_id}`}>
            <img src={article.article_img_url}/>
            <h3>{article.title}</h3>
            </Link>
        </ul>
    )
}

export default ArticleCard;