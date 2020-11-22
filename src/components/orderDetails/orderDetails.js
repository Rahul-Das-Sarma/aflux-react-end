import React, { useEffect } from 'react';
import './orderDetails.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



const OrderDetails = (props) => {

    useEffect(() => {
        if(props.userinfo.token === null){
            props.history.push('/')
        }
    },[props.userinfo.token])

    useEffect(()=> {
        if(!props.cart.shippingAddress){
            props.history.push('/shipping-address')
        }
     
    }, [props.cart.shippingAddress])



return (
    <div className="order-details-container" >
    <h3>Order Details</h3>
    <div className="order-detail-card">
        <div className="order-detail-padding" >
            {props.cart.cartItems.map(item=> {
                return(<>
                    <div className="order-image">
                    <img key={item._id} style={{width: "100px", height:"110px"}} src={item.photo} alt=""/>
                </div>
                <div className="order-product-details">
                  
                  <p style={{lineHeight:"1.5"}}>Title: {item.title} </p>
                <p style={{lineHeight:"1.5"}}>Price: {item.price}</p>
                <p style={{lineHeight:"1.5"}}>Qty: {item.productqty}</p>
                </div>
                </>
                )
            })}
     
    </div>
    <div className="order-shipping-address">
        <h4>Deliver to</h4>
        <p style={{lineHeight:"1.5"}}>Name: {props.cart.shippingAddress.fname} {props.cart.shippingAddress.lname}</p>    
        <p style={{lineHeight:"1.5"}}>Pin Code: {props.cart.shippingAddress.pincode}</p>
        <p style={{lineHeight:"1.5"}}>Full Address: {props.cart.shippingAddress.hNo} , {props.cart.shippingAddress.fullAddress}</p>
      <Link to='/delivery-info'><button className="proceed-to-buy-btn" >Place Order</button> </Link>
        </div>
    </div>
    </div>
)
}
const mapStateToProps = (state) => {
   
    return {
        userinfo: state.UserSignIn,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(OrderDetails);