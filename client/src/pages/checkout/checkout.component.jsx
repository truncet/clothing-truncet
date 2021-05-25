import React from 'react';
import './checkout.styles.scss';

import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import CustomButton from './../../components/custom-button/custom-button.component'; import {connect} from 'react-redux'; import {selectCartItems, selectCartTotal} from './../../redux/cart/cart.selectors'; import {createStructuredSelector} from 'reselect';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-checkout.component'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <StripeCheckoutButton/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);