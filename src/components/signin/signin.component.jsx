import React, {useState} from 'react';

import './signin.styles.scss';
import {connect} from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart} from './../../redux/user/user.actions';

const SignIn = ({emailSignInStart, googleSignInStart}) =>  {
   
    const [userCredentials, setUserCredentials] = useState({email :'', password:''})
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        
        try{
           emailSignInStart(email, password) ;
        }
        catch(error){
            console.log(error.message);
        }

    }

    const  handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({
            ...userCredentials,[name]: value
        })
    }


        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput label='email' name='email' type='email' value={email} handleChange={handleChange} required />
                    <FormInput label='password' name='password' type='password' value={password} handleChange={handleChange} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);