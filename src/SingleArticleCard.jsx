import { getArticleById } from "../Utils/api";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import './SingleArticleStyle.css';

function SingleArticleCard() {
    const {article_id} = useParams();
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticleById(article_id)
        .then(data => {
        setArticle(data.article)
    })
    .catch((err) => {
        console.log('there was an error retreiving the article', err)
    })
    }, [article_id])

    if(!article){
        return <div>Loading...</div>
    }

    return (
        <div className="single-article-style">
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={article.title}/>
            <p>{article.body}</p>
        </div>
    )
}

export default SingleArticleCard;