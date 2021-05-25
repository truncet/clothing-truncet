import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from './../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import {auth} from './../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {signOutStart} from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOutStart}) => (
    <div className='header'>
        <Link className='log-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <div className='option'>
                <Link className='shop' to='/shop'>SHOP</Link>
            </div>
            <div className='option'>
                <Link className='contact' to='/shop'>CONTACT</Link>
            </div>
            {
                currentUser ?
                (<div className='option' onClick= {() => signOutStart()}>
                    SIGN OUT
                </div>):
                (<div className='option'>
                    <Link to='/signin'>SIGN IN</Link>
                </div>)
            }
            <CartIcon />
        </div>
        {
            hidden? null : (<CartDropdown/>)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);