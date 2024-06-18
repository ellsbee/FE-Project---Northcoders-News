import React from 'react'
import './CommentCardStyle.css'

function CommentCard({comment}) {
    return (
        <div className="comment-card-style">
            <p>{comment.body}</p>
            <p>by {comment.author} on {new Date(comment.created_at).toLocaleString()}</p>
            <p>Votes: {comment.votes}</p>
        </div>
    )
}
export default CommentCard;
