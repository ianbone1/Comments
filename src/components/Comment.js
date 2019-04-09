import React from 'react'
import './comment.css'

const Comment = ({children, author}) => {
  return(
    <div className="comment">
      <li>{children} - {author}</li>
    </div>
  )
}
export default Comment;
