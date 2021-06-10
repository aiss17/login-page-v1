import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import gambar from '../assets/images/logo_sikom.png'

class Login extends React.Component {
    componentDidMount(){
        //animation code
        $(document).ready(function(){
            $('.login-info-box').fadeOut();
            $('.login-show').addClass('show-log-panel');
        
            $('input[type="radio"]').on('change',function() {
                if($('#log-reg-show').is(':checked')) {
                    $('.register-info-box').fadeIn();
                    $('.password-info-box').fadeIn();
                    $('.login-info-box').fadeOut();
                    $('.reset-info-box').fadeOut();
                    
                    $('.white-panel').removeClass('right-log');
                    
                    $('.login-show').addClass('show-log-panel');
                    $('.register-show').removeClass('show-log-panel');
                }
                if($('#log-login-show').is(':checked')) {
                    $('.register-info-box').fadeOut();
                    $('.password-info-box').fadeOut(); 
                    $('.login-info-box').fadeIn();
                    $('.reset-info-box').fadeIn();
                    
                    $('.white-panel').addClass('right-log');
                    $('.register-show').addClass('show-log-panel');
                    $('.login-show').removeClass('show-log-panel');
                    
                }
            });
        });
    }
 
    render() {
        return (
            <div class="login-reg-panel">
                <div class="login-info-box">
                    {/* <h2>Have an account?</h2>
                    <p>Lorem ipsum dolor sit amet</p> */}
                    <img src={gambar} width={350} height={350} style={{boxShadow: '0 0 15px 9px #7ebff5'}}/>
                </div>
                            
                <div class="register-info-box">
                    {/* <h2>Don't have an account?</h2>
                    <p>Lorem ipsum dolor sit amet</p> */}
                    <img src={gambar} width={350} height={350} style={{boxShadow: '0 0 15px 9px #7ebff5'}} />
                </div>

                {/* <div>
                    haha
                </div> */}
                            
                <div class="white-panel">
                    <div class="login-show">
                        <h2>Welcome!</h2>
                        <p>For those who are already registered, please login </p>
                        <input style={{borderRadius: 10}} type="text" placeholder="Email" />
                        <input style={{borderRadius: 10}} type="password" placeholder="Password" />
                        <input style={{borderRadius: 10}} type="button" value="Login" />
                        
                        <div style={{marginTop: 20, color: '#5599ff', textAlign: 'center'}}>
                            <label class="password-info-box" for="log-login-show" style={{cursor: 'pointer'}}>
                                <p>{'Forgot password >>'}</p>
                            </label>
                        </div>
                        <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
                    </div>

                    <div class="register-show">
                        <h2>Reset Password</h2>
                        <p>Enter the email address associated with your account and we'll send you a link to reset your password</p>
                        <input style={{borderRadius: 10}} type="text" placeholder="Email" />
                        
                        <input style={{borderRadius: 10}} type="button" value="Reset Password" />

                        <div style={{marginTop: 20, color: '#5599ff', textAlign: 'center'}}>
                            <label class="reset-info-box" for="log-reg-show" style={{cursor: 'pointer'}}>
                                <p>{'<< I remember my password'}</p>
                            </label>
                        </div>
                        <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
                    </div>
                </div>
            </div>
        )
    };
}

export default Login;