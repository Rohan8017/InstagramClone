import React, { createRef, Component } from 'react';
import { database } from './Firebase';
import { getDocs } from 'firebase/firestore';
import Like from './Like';
import Comment from './Comment';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

export default class Reels extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            user: {},
            isVideoPlaying: true,
            showCommentsModal:false,
            isShowComment: false,
        }
    }
    // videoRef=createRef(null);
    // handleClick=()=>{
    //     if(this.state.isVideoPlaying){
    //         this.videoRef.current.pause();
    //         this.setState({isVideoPlaying:false})
    //         console.log(this.videoRef.current)
    //     }else{
    //         this.videoRef.current.play();
    //         this.setState({isVideoPlaying:true})
    //         console.log(this.videoRef.current)
    //     }
    // }
    componentDidMount() {
        const subArr = getDocs(database.posts).then((res) => {
            this.setState({ posts: res.docs })
            console.log(res.docs)
        }).catch((err) => {
            console.log(err);
        })
        const tempUser = JSON.parse(localStorage.getItem("user"));
        this.setState({ user: tempUser });
        console.log(tempUser)
    }
    showCommentsModal = (id) => {
        this.setState({ showCommentsModal: true });
        this.setState({isShowComment:id});
    }
    hideCommentsModal = () => {
        this.setState({ showCommentsModal: false });
        this.setState({isShowComment:false});
    }
    render() {
        return (
            <div className='reels'>
                <div className='reels-videos'>
                    {this.state.posts.map((item) => {
                        const data = item.data();
                        console.log(data);
                        return (
                            <div key={item.id} className='reels-video'>
                                <video ref={this.videoRef} controls onClick={this.handleClick} src={data.uUrl} id={data.pId} className="single-post"></video>
                                <div className='right-propbar'>
                                    <Like userData={this.state.user} postData={data} id={item.id} />
                                    <div>
                                        <ChatBubbleOutlineIcon onClick={()=>this.showCommentsModal(item.id)}/>
                                        <span>{data.comments.length}</span>
                                    </div>
                                    {/* <Comment/> */}
                                    <SendIcon />
                                    <TurnedInNotIcon />
                                    <MoreHorizIcon />
                                </div>
                                {this.state.isShowComment===item.id && this.state.showCommentsModal && <Comment hideCommentsModal={this.hideCommentsModal} userData={this.state.user} postData={data} id={item.id}/>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
