import React, { Component } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { updateDoc, doc } from 'firebase/firestore';
import { fstore,database } from './Firebase';

export default class Like extends Component {
    constructor(props){
        super(props);
        this.state={
            like:false,
            likeCount:this.props.postData.likes.length,
        }
    }
    componentDidMount() {
        // console.log(this.props)
        let check = this.props.postData.likes.includes(this.props.userData.uid) ? true: false;
        this.setState({like: check});
    }
    // componentDidUpdate(){
    //     if(this.state.postData.likes.length !==this.props.postData.likes.length){
    //         const count=this.state.postData.likes.length;
    //         this.setState({likeCount:count});
    //     }
    // }
    handleClick=()=>{
        if(this.state.like === true) {
            let tempArr = this.props.postData.likes.filter((el) => el != this.props.userData.uid);
            let tempRef = doc(fstore, "posts", this.props.id);
            updateDoc(tempRef, {likes: tempArr}).then((res) => {
                // console.log(res);
                this.setState({like: false});
            }).catch((err) => {
                console.log(err);
            })
            const count=this.state.likeCount-1;
            this.setState({likeCount:count});
        } else {
            let tempArr = [...this.props.postData.likes, this.props.userData.uid];
            let tempRef = doc(fstore, "posts", this.props.id);
            updateDoc(tempRef, {likes: tempArr}).then((res) => {
                // console.log(res);
                this.setState({like: true});
            }).catch((err) => {
                console.log(err);
            })
            const count=this.state.likeCount+1;
            this.setState({likeCount:count});
        }
    }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.like===false ? <FavoriteBorderIcon/>:<FavoriteIcon style={{color:'red'}}/>}
        <span>{this.state.likeCount>0 && this.state.likeCount}</span>
      </div>
    )
  }
}
