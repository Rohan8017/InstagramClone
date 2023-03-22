import React, { Component } from 'react';
import { updateDoc, doc } from 'firebase/firestore'
import { fstore } from './Firebase';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment:"",
      showComment:[...this.props.postData.comments],
      countComment:this.props.postData.comments.length
    }
  }
  handleClick = () => {
    let tempArr = [...this.state.showComment, {
      uName: this.props.userData.displayName,
      uProfile: this.props.userData.photoURL,
      text: this.state.comment,
      uId: this.props.userData.uid,
      time:Date.now()
    }];
    this.setState({showComment:tempArr})
    let tempRef = doc(fstore, "posts", this.props.id);
    updateDoc(tempRef, { comments: tempArr }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    this.setState({comment:''})
  }
  render() {
    return (
      <div className='upload-comments'>
        <div className='upload-comments-header'>
          <p className='upload-comments-header-span1'>Comments</p><span onClick={() => this.props.hideCommentsModal()} className='upload-comments-header-span2'>&times;</span>
        </div>
        <div className='show-comments'>
          {
            this.state.showComment.map((ele) => {
              return (
                <div className='comment' key={this.props.userData.uid}>
                  <div className='comment-image-div'>
                    <img className='profile-image' src={ele.uProfile} />
                  </div>
                  <div className='comments-name-text'>
                  <p className='comments-name'>{ele.uName}</p><p>{ele.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='input-comments'>
          <img className='input-comments-img' src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' />
          <textarea placeholder='add a comment' onChange={(e)=>this.setState({comment:e.target.value})} value={this.state.comment}/>
          <button onClick={this.handleClick}>post</button>
        </div>
      </div>
    )
  }
}
