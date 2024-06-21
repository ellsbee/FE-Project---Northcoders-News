import React, { useState, useEffect } from "react";
import { getArticles } from '../Utils/api';
import ArticleCard from './ArticleCard';
import { useSearchParams } from "react-router-dom";

function Topics() {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(searchParams.get('sort_by') || 'date');
    const [order, setOrder] = useState(searchParams.get('order') || 'asc');

    useEffect(() => {
        const params = new URLSearchParams({
            sort_by: sortBy,
            order: order,
        });
        setSearchParams(params);
        getArticles(params.toString())
        .then((data) => {
            setArticles(data.articles);
        })
        .catch((err) => {
            alert('That topic doesn\'t exist!')
            console.log('That topic doesn\'t exist!', err)
        })
    }, [sortBy, order, setSearchParams]);

    useEffect(() => {
        filterAndSortArticles();
    }, [articles, selectedTopic, sortBy, order]);

    function filterAndSortArticles() {
        let filtered = articles;
        if (selectedTopic) {
            filtered = articles.filter(article => article.topic === selectedTopic);
        }

        const sorted = filtered.sort((a, b) => {
            if (sortBy === 'date') {
                return order === 'asc' ? new Date(a.created_at) - new Date(b.created_at) : new Date(b.created_at) - new Date(a.created_at);
            } else if (sortBy === 'comment_count') {
                return order === 'asc' ? a.comment_count - b.comment_count : b.comment_count - a.comment_count;
            } else if (sortBy === 'votes') {
                return order === 'asc' ? a.votes - b.votes : b.votes - a.votes;
            } else {
                return 0;
            }
        });

        setFilteredArticles(sorted);
    }

    function filterArticlesByTopic(topic) {
        setSelectedTopic(topic);
    }

    return (
        <section>
            <div className="button-container">
                <button className="coding-button" onClick={() => filterArticlesByTopic('coding')}>Coding</button>
                <button className="football-button" onClick={() => filterArticlesByTopic('football')}>Football</button>
                <button className="cooking-button" onClick={() => filterArticlesByTopic('cooking')}>Cooking</button>
            </div>
            <div>
                <section className="sort-by">
                <h1>Sort by:</h1>
                <select className="sort-by-dropdown" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                    <option value="date">Date</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
                </select>
                <button className="sort-by-button" onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
                    {order === 'asc' ? 'Ascending' : 'Descending'}
                </button>
                </section>
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
