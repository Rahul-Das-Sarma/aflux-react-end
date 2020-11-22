import React, {useEffect, useState} from 'react';
import './shippingaddress.css';
import { connect } from 'react-redux';
import {saveShippingAddress} from '../../store/actions/actioncreator'



const ShippingAddress = (props) => {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [pincode, setPincode] = useState("");
    const [hNo, setHno] = useState("");
    const [fullAddress, setFullAddress] = useState("");

const retrievingShippingInfo = () => {
    props.ShippingAddressInfoDispatch(fname, lname, pincode, hNo, fullAddress);
}

useEffect(() => {
if(props.ShippingAddressInfo){
    props.history.push('/order-details');
}
},[props.ShippingAddressInfo])

useEffect(() => {
    if(props.userinfo.token === null){
        props.history.push('/signin')
    }
},[props.userinfo.token])

return(<>
    <div className="category-header shipping-header">
    <h4 style={{marginBottom:"10px", color:"#363636"}}>Shipping Address</h4>
    <hr style={{maxWidth:"400px"}} />
</div>
<div className="shipping-address-container">
 
 <div className="shipping-address-card">
    
     
 <div className="form-name firstName-shipping">

           <input className="Input-Styles" onChange={e => setFName(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">First Name</span></label>
           </div>

           <div className="form-name LastName-shipping">
           <input className="Input-Styles" onChange={e => setLName(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Last Name</span></label>
           </div>

           <div className="form-name Pincode-shipping">
           <input className="Input-Styles" onChange={e => setPincode(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Pin-code</span></label>
           </div>

           <div className="form-name HouseNo-shipping">
           <input className="Input-Styles" onChange={e => setHno(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">House No.</span></label>
           </div>

           <div className="form-name full-address-shipping">
           <input className="Input-Styles" onChange={e => setFullAddress(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Full Address</span></label>
           </div>

           <div className="upload-Button">
              <button onClick={retrievingShippingInfo} className="proceed-to-buy-btn btn-shipping-address" >Next</button>
          </div>

 </div>
</div>
</>)
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.UserSignIn,
        ShippingAddressInfo: state.cart.shippingAddress
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        ShippingAddressInfoDispatch: (fname, lname, pincode, hNo, fullAddress) => {
            dispatch(saveShippingAddress(fname, lname, pincode, hNo, fullAddress))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddress);
