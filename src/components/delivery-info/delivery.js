import React, {useEffect} from 'react';
import './delivery.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const DeliveryInformation = (props) => {
    useEffect(() => {
        if(props.userinfo.token === null){
            props.history.push('/')
        }
    },[])
    
    
return(<div className="delivery-container">
 <h3>Delivery Information</h3>
 <div className="delivery-info-container">
     <div className="delivery-info-padding">
     <h4 style={{lineHeight:"4"}}>Items will be delivered to this address:</h4>
     <p style={{lineHeight:"1.5"}}>Name: {props.items.fname} {props.items.lname} </p>    
        <p style={{lineHeight:"1.5"}}>Pin Code: {props.items.pincode}</p>
        <p style={{lineHeight:"1.5"}}>Full Address: {props.items.hNo} , {props.items.fullAddress}  </p>

       <Link to='/'> <button className="proceed-to-buy-btn delivery-btn"> Back to Shopping </button> </Link>
     </div>
 </div>
</div>)
}

const mapStateToProps = (state) => {
  
    return {
        userinfo: state.UserSignIn,
        items: state.cart.shippingAddress
    }
}

export default connect(mapStateToProps)(DeliveryInformation);