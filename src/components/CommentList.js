import React, {Component} from 'react'
import Comment from './Comment.js'

class CommentList extends Component{


  render(){
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
      )
    })


    return(
      <div className="comment-list">
        <h2>I am a CommentList</h2>
          {commentNodes}
      </div>
    )
  }
}

export default CommentList;
