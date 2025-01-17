import React , {useState} from 'react';
import {connect} from 'react-redux';

import './signup.styles.scss';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.actions';
import { signUp } from '../../redux/user/user.sagas';

const SignUp  = ({signUpStart}) => {

    const [userCredentials, setUserCredentials] = useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        });

    const {displayName, email, password, confirmPassword} = userCredentials;
    const handleChange = event =>{
        const {name, value} = event.target;
        setUserCredentials({...userCredentials,[name]:value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(displayName);
        if (password !== confirmPassword){
            alert("Hey!! Passwords didn't match")
            return;
        }

        signUpStart({email, password, displayName});
        


    }
    

   {
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label= 'Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label= 'Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label= 'Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label= 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
        } 
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCreds) => dispatch(signUpStart(userCreds))
})

export default connect(null, mapDispatchToProps)(SignUp);