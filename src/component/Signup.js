import React, { Component } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaGooglePlay, FaMicrosoft } from "react-icons/fa";
import instaLogo from '../images/insta-logo.png';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            fullName:"",
            userName:"",
            password:""
        }
    }
    handleSubmit=()=>{
        console.log(this.state);
        this.props.signup(this.state.email,this.state.password,this.state.userName)
    }
    render() {
        return (
            <div className='Signup-section'>
                <div className='inner-section'>
                    <div className='instagram-logo1'>
                        <img src={instaLogo} alt=''/>
                    </div>
                    <p className='signup-description'>Sign up to see photos and videos from your friends</p>
                    <div className='log-in-with-facebook-signup'><FacebookIcon /><div>Log in with Facebook</div></div>
                    <div className='or-button'>
                        <hr className='left-hr' />
                        <p>OR</p>
                        <hr className='right-hr' />
                    </div>
                    <div className='signup-page-email login-page-input'>
                        <label>{ }</label>
                        <input type='text' placeholder='Phone number or email' onChange={(e)=> this.setState({email:e.target.value})} />
                    </div>
                    <div className='signup-page-fullname login-page-input'>
                        <label>{ }</label>
                        <input type='text' placeholder='full-name' onChange={(e)=> this.setState({fullName:e.target.value})}/>
                    </div>
                    <div className='signup-page-username login-page-input'>
                        <label>{ }</label>
                        <input type='text' placeholder='username' onChange={(e)=> this.setState({userName:e.target.value})}/>
                    </div>
                    <div className='signup-page-password login-page-input'>
                        <label>{ }</label>
                        <input type="password" placeholder='password' onChange={(e)=> this.setState({password:e.target.value})}/>
                    </div>
                    <p className='learn-more'>People who use our service may have uploaded your contact information to Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628?hl=en'>Learn More</a></p>
                    <p className='terms-condition'>By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US&hl=en'>Terms</a> ,<a href='https://www.facebook.com/privacy/policy?hl=en'>Privacy Policy</a> and<a href='https://help.instagram.com/1896641480634370/'> Cookies Policy</a>.</p>
                    <button className='Sign-up-button' onClick={this.handleSubmit}>Sign up</button>
                </div>
                <div className='redirect-to-login'>Have an account? <Link to='/'>Log in</Link></div>
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
        )
    }
}
