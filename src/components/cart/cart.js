import React from 'react';
import {connect} from 'react-redux';
import './cart.css';
import {increaseQuantity, decreaseQuantity, RemoveFromCart} from '../../store/actions/actioncreator';
import CancelIcon from '@material-ui/icons/Cancel';
import {Link} from 'react-router-dom';

const Cart = (props) => {
   
   return( <div className="Cart-container" >
       {props.cart.cartItems.length === 0 ? 
       <div style = {{textAlign: "center" }} >
         <h1 > Your Cart is empty</h1>
         <img style={{width: "80%", height: "80%"}} src = "https://res.cloudinary.com/dz8srutis/image/upload/v1604657424/empty-cart_olw39m.png" alt="empty-cart" />
         </div>
         :
       <table className="table-moves" style={{width: "100%"}}>
        <tbody>
            <th style={{paddingBottom: "25px", textAlign: "left"}}>Product</th>
            <th style={{paddingBottom: "25px", paddingLeft: "20px", paddingRight: "20px" }}>Quantity</th>
            <th style={{paddingBottom: "25px"}}>Price </th>
            {props.cart.cartItems.map(item => {
            return( <tr key={item.product} style={{textAlign: "center"}}>
             <td style={{paddingTop: "20px"}}><img src={item.photo} style={{width: "90px",height:"100px", float: "left" }} alt="" /> {item.title} <CancelIcon onClick={() =>  props.removeFromcart(item)} style={{color: "#2A98EF", marginTop:"40px" }} /> </td>
             <td style={{paddingTop: "20px"}}><span className="increase-quantity" onClick={() => props.increaseQuantity(item)} > +  </span> {item.productqty} <span className="decrease-quantity" onClick={() => props.decreaseQuantity(item)}>-</span> </td>
             <td style={{paddingTop: "20px"}}>₹{item.price}</td>
                 </tr>
            )
            })}
            <tr style={{textAlign: "center" }}>
                <td style={{fontWeight: "bold", paddingTop: "40px"}}> TOTAL AMOUNT</td>
                <td></td>
                <td style={{paddingTop: "40px"}}>₹{props.cart.cartItems.reduce((a,c) => Math.round(a + c.price * c.productqty), 0)} </td>
            </tr>
        <Link to="/shipping-address"><button className="proceed-to-buy-btn" >Proceed to Buy</button> </Link>
            </tbody>
           
        </table> 
        
        }
    
    
    </div>)

}

const mapStateToProps = (state) => {
    return {
        cart:  state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increaseQuantity: (item) => {
            dispatch(increaseQuantity(item))
        },
        decreaseQuantity: (item) => {
            dispatch(decreaseQuantity(item))
        },
        removeFromcart: (item) => {
            dispatch(RemoveFromCart(item))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);