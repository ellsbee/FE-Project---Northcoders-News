import React, { useState, useEffect } from "react";
import { getArticles } from '../Utils/api';
import ArticleCard from './ArticleCard';

function Topics() {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((data) => {
            setArticles(data.articles);
            setFilteredArticles(data.articles);
        });
    }, []);

    function filterArticlesByTopic(topic) {
        const filtered = articles.filter(article => article.topic === topic);
        setFilteredArticles(filtered);
    };

    return (
        <section>
            <div className="button-container">
                <button className="coding-button" onClick={() => filterArticlesByTopic('coding')}>Coding</button>
                <button className="football-button" onClick={() => filterArticlesByTopic('football')}>Football</button>
                <button className="cooking-button" onClick={() => filterArticlesByTopic('cooking')}>Cooking</button>
            </div>
            <ul id="article" className="article-list">
                {filteredArticles.map((article) => (
                    <ArticleCard article={article} key={article.article_id} />
                ))}
            </ul>
        </section>
    );
}

export default Topics;
