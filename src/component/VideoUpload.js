import React, { Component } from 'react';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { v4 as uuidv4 } from 'uuid';
import { CircularProgress } from '@mui/material';
import { database, storage } from './Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {addDoc} from 'firebase/firestore';

export default class VideoUpload extends Component {
  constructor() {
    super()
    this.state = {
      errmsg: '',
      improgress: false,
      percentage: 0,
      user: {}
    }
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user')) ?? {};
    this.setState({user: user});
  }
  handleChange = (file) => {
    console.log(file);
    if (file === undefined) {
      this.setState({ errmsg: 'Please select a file' });
      console.log('error');
      setTimeout(() => {
        this.setState({ errmsg: '' })
      }, 5000)
    }
    if (file.size / (1024 * 1024) > 100) {
      this.setState({ errmsg: 'The file is too big' });
      setTimeout(() => {
        this.setState({ errmsg: '' })
      }, 5000)
    }
    let uid = uuidv4();
    const uploadRef = ref(storage, `/posts/${uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(uploadRef, file);
    const f1 = (snapshot) => {
      //progress
      this.setState({ improgress: true })
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({ percentage: progress.toFixed(2) + '%' })
      // console.log('Upload is ' + progress + '% done');
    }
    const f2 = (error) => {
      //error
      this.setState({ errmsg: error });
      setTimeout(() => {
        this.setState({ errmsg: '' })
      }, 5000)
    }
    const f3 = () => {
      this.setState({ improgress: false });
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        let obj = {
          likes:[],
          comments: [],
          pId: uid,
          uUrl: downloadURL,
          uId: this.state.user.uid,
          uName: this.state.user.displayName,
          uProfileImage:this.state.user.photoURL,
          createdAt: Date.now(),
        }
        addDoc(database.posts, obj).then((refernce) => {
          console.log("Posts updated success");
          console.log(refernce);
          this.setState({ loading: false });
        }).catch((err) => {
          console.log(err);
          console.log("error");
        })
      })
    }
    uploadTask.on('state_changed', f1, f2, f3);
  }
  render() {
    return (
      <div className='upload-video'>
        <div className='upload-video-header'>Create New post</div>
        <div className='upload-video-section'>
          <SlowMotionVideoIcon />
          <p className='upload-video-para'>Drag Photos and videos</p>
          {this.state.improgress && <CircularProgress/>}
          {(this.state.percentage !== 0 && this.state.percentage !== "100.00%") ? <p className='show-percentage'>{this.state.percentage}</p> : ''}
          <input type='file' accept='video/*' onChange={(e) => this.handleChange(e.target.files[0])} />
          <button className='upload-video-button' >Select from computer</button>
          <p className='error-msg'>{this.state.errmsg}</p>
        </div>
      </div>
    )
  }
}
