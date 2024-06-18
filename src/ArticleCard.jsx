import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({article}) {
    return(
        <ul className="article-card">
            <Link to={`/article/${article.article_id}`}>
            <img src={article.article_img_url}/>
            <h1>{article.title}</h1>
            </Link>
        </ul>
    )
}

export default ArticleCard;