import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishKey  = 'pk_test_51ILSjtIjFrgYGljOnb3QerI8oK4BKDOYyCA9oe55jrD9QjgKHxqEglLLeWdYPnUmC5jsB0eEGIBrhCe8r11GpFSN00WmF4eTlx'

    const onToken = (token) =>{
        console.log(token);
        alert("Payment Successful!!");
    } 


    return (
        <StripeCheckout
            label='Pay Now'
            name='Truncet Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            descriptions={`Your total is $${price}`} 
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishKey}
        
        />
    )

};

export default StripeCheckoutButton;