import React, { Component } from 'react';
import CommentList from '../components/CommentList.js'
import CommentForm from '../components/CommentForm.js'
class CommentBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[
        {id:1, author: 'Louise', text: 'I love cheese'},
        {id:2, author: 'Colin', text: 'Is it home time yet?'},
        {id:3, author: 'Ian', text: 'This is baws!'}
      ]
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment){
    comment.id = Date.now()
    const updatedComments = [...this.state.data, comment]
    this.setState({data: updatedComments})

  }

  render(){
    return(
      <div className="comment-box">
        <h1>I am a CommentBox</h1>
        <h2>Enter a comment:</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList data={this.state.data}/>
      </div>
    )
  }

}

export default CommentBox;
