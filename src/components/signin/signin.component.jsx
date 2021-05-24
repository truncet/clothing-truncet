import React from 'react';

import './signin.styles.scss';
import {connect} from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart} from './../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {emailSignInStart}  = this.props;
        const {email, password} = this.state;
        try{
           emailSignInStart(email, password) ;
        }
        catch(error){
            console.log(error.message);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name='password' type='password' value={this.state.password} handleChange={this.handleChange} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);