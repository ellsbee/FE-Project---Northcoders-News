import React from 'react'
import './CommentCardStyle.css'

function CommentCard({comment, onDelete}) {
    return (
        <div className="comment-card-style">
            <p>{comment.body}</p>
            <p>by {comment.author} on {new Date(comment.created_at).toLocaleString()}</p>
            <p>Votes: {comment.votes}</p>
            <button className="comment-card-button" onClick={() => onDelete(comment.comment_id, comment.author)} aria-label="delete comment">Delete</button>
        </div>
    )
}
export default CommentCard;
