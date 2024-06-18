import { getArticleById, getAllArticleComments } from "../Utils/api";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import './SingleArticleStyle.css';
import CommentCard from "./CommentCard";

function SingleArticleCard() {
    const {article_id} = useParams();
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleById(article_id)
        .then(data => {
        setArticle(data.article)
    })
    .catch((err) => {
        console.log('there was an error retreiving the article', err)
    })
    getAllArticleComments(article_id)
    .then(data => {
        setComments(data.comments)
    })
    .catch(err => {
        console.log('there was an error retrieving the comments', err)
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
            <div className="article-comments">
                <h2>Comments</h2>
                {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}

            </div>
        </div>
    )
}

export default SingleArticleCard;