import React, { Component } from 'react';
import instaLogo from '../images/insta-logo.png';
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaGooglePlay, FaMicrosoft } from "react-icons/fa";
import Img1 from "../images/img1.png";
import Img2 from "../images/img2.png";
import Img3 from "../images/img3.png";
import Img4 from "../images/img4.png";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }
  handleSubmit=()=>{
    // console.log(this.state)
    this.props.logIn(this.state.email,this.state.password);
  }
  render() {
    return (
      <div className='login-page'>
        <div className='imgwrapper'>
          <div className='image-slider'>
        <CarouselProvider
              totalSlides={4}
              visibleSlides={1}
              naturalSlideHeight={520}
              naturalSlideWidth={250}
              isPlaying={true}
              interval={3000}
              dragEnabled={false}
              infinite={true}
              touchEnabled={false}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={Img1}></Image>
                </Slide>
                <Slide index={1}>
                  <Image src={Img2}></Image>
                </Slide>
                <Slide index={2}>
                  <Image src={Img3}></Image>
                </Slide>
                <Slide index={3}>
                  <Image src={Img4}></Image>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </div>
        <div className='right-section'>
          <div className='login-section'>
            <div className='instagram-logo'>
              <img src={instaLogo} alt=''/>
            </div>
            <div className='login-page-username login-page-input'>
              <label>{}</label>
              <input type='text' placeholder='Phone number,username, or email' onChange={(e)=>this.setState({email:e.target.value})} />
            </div>
            <div className='login-page-password login-page-input'>
              <label>{}</label>
              <input type="password" placeholder='password' onChange={(e)=>this.setState({password:e.target.value})}/>
            </div>
            <button className='log-in-button' onClick={this.handleSubmit}>Log in</button>
            <div className='or-button'>
              <hr className='left-hr' />
              <p>OR</p>
              <hr className='right-hr' />
            </div>
            <div className='log-in-with-facebook' onClick={()=>this.props.loginwithGoogle()}><FacebookIcon /><div>Log in with Facebook</div></div>
            <div className='forgot-password'>Forgot password</div>
          </div>
          <div className='redirect-sign-up'>
            <p>Don't have an account? <Link to="/signup"> Sign up</Link></p>
          </div>
          <p className='get-app-para'>Get the app</p>
          <div className='download-options'>
            <div className='google-play download-options-option'>
              <div className='icon'>
                <FaGooglePlay style={{ color: 'blue', fontSize: '30px' }} />
              </div>
              <div className='text'>
                <span className='small-text'>GET IT ON</span>
                <span className='big-text'> Google Play</span>
              </div>
            </div>
            <div className='microsoft-store download-options-option'>
              <div className='icon'>
                <FaMicrosoft style={{ color: 'blue', fontSize: '30px' }} />
              </div>
              <div className='text'>
                <span className='small-text'>Get it from</span>
                <span className='big-text'> Microsoft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
