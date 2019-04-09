import React from 'react'
import Comment from './Comment.js'
import './CommentList.css'

const CommentList = ({data}) => {
  const commentNodes = data.map(comment => {
    return (
      <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
    )
  })

  return(
    <div className="comment-list">
    {commentNodes}
    </div>
  )
}

export default CommentList;
