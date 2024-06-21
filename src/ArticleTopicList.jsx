// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getArticlesByTopic } from '../Utils/api';
// import ArticleCard from './ArticleCard';

// function ArticleTopicList() {
//     const { topic } = useParams();
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         getArticlesByTopic(topic).then((data) => {
//             setArticles(data.articles);
//         });
//     }, [topic]);

//     return (
//         <section>
//             <ul id="article" className="article-list">
//                 {articles.map((article) => (
//                     <ArticleCard article={article} key={article.article_id} />
//                 ))}
//             </ul>
//         </section>
//     );
// }

// export default ArticleTopicList;

