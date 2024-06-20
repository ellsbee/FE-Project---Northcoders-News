import { getArticleById, getAllArticleComments, voteOnArticle, postComment, deleteComment } from "../Utils/api";
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom' 
import './SingleArticleStyle.css';
import CommentCard from "./CommentCard";
import './PostCommentStyle.css'
import { UserContext } from "./UserContext";

function SingleArticleCard() {
    const {article_id} = useParams();
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    const [newCommentBody, setNewCommentBody] = useState('')
    const {user} = useContext(UserContext)
    const [commentSuccess, setCommentSuccess] = useState(false)
    const [deleteSuccess, setDeleteSuccess] = useState(null);
    const [deleteError, setDeleteError] = useState(null);


    useEffect(() => {
        getArticleById(article_id)
        .then(data => {
        setArticle(data.article)
        setVotes(data.article.votes)
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

    function handleVote(event) {
        setVotes((currentVotes) => currentVotes + event)
        voteOnArticle(article_id, event)
        .then((newVotes) => {
            setVotes(newVotes)
        })
        .catch((err) => {
            setVotes((currentVotes) => currentVotes - event)
            console.log('There was an error logging the vote', err)
        })
    }

    function handleCommentSubmit(event) {
        event.preventDefault();
        
        const optimisticComment = {
            comment_id: comments[0].comment_id + 1,
            body: newCommentBody,
            article_id: article_id,
            author: user.username,
            votes: 0,
            created_at: new Date().toISOString(),
        }

        setComments([optimisticComment, ...comments])
        
        postComment(article_id, user.username, newCommentBody)
        .then(() => {
            setNewCommentBody('')
            setCommentSuccess(true)
        })
        .catch((error) => {
            console.error('Error posting comment', error)
            alert('Unable to post comment')
        })
    };

    function handleDeleteComment(comment_id, author) {  
        if(user.username !== author){
            setDeleteError('You can only delete your own comments!')
            setDeleteSuccess(null);
            return
        }
        deleteComment(comment_id)
        .then(() => {
            setComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== comment_id)
            );
            setDeleteSuccess('Your comment was deleted');
            setDeleteError(null);
        })
        .catch((error) => {
            console.error('Error deleting comment', error);
            setDeleteError('Could not delete comment. Please try again');
            setDeleteSuccess(null);
        })
    };
    
    if(!article){
        return <div>Loading...</div>
    }

    return (
        <div className="single-article-style">
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={article.title}/>
            <p>{article.body}</p>
            <p>Votes: {votes}</p>
            <div className="vote-buttons">
                <button className="vote-button" onClick={() => handleVote(1)} aria-label="Upvote article">Upvote</button>
                <button className="vote-button" onClick={() => handleVote(-1)} aria-label="Downvote article">Downvote</button>
            </div>
            <section>
            <section>
            <form onSubmit={handleCommentSubmit} className="form-style">
                <h2>Leave a comment</h2>
                <textarea
                rows="5"
                placeholder="Tell us what you think..."
                value={newCommentBody}
                onChange={(event) => setNewCommentBody(event.target.value)}
                required
                />
            <br />
            <button className="comment-button" type="submit">Submit</button>
            {commentSuccess && <div className="comment-posted">Thanks for your comment!</div>}
            </form>
            </section>
            </section>
            <div className="article-comments">
                <h2>Comments</h2>
                {deleteError && <div className="unauthorised-delete">{deleteError}</div>}
                {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} onDelete={handleDeleteComment} deleteSuccess={deleteSuccess} deleteError={deleteError}/>
                }
            )
        }
            </div>
        </div>
    )
}

export default SingleArticleCard;