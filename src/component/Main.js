import React, { Component } from 'react'
import Comment from './Comment';
import Leftsidebar from './Leftsidebar';
import Reels from './Reels';
import VideoUpload from './VideoUpload';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      showmodal: false,
    }
  }
  showModal = () => {
    this.setState({ showmodal: !this.state.showmodal });
  }
  render() {
    return (
      <div className='main-page'>
        {this.state.showmodal && <VideoUpload />}
        {this.state.showCommentsModal && <Comment hideCommentsModal={this.hideCommentsModal}/>}
        <Leftsidebar logOut={this.props.logOut} showModal={this.showModal} />
        <Reels/>
      </div>
    )
  }
}
