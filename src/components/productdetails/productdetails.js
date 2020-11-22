import React, { useCallback, useEffect } from "react";
import "./productdetails.css";
import { connect } from 'react-redux';
import { ProductDetailsinfo, AddToCart } from '../../store/actions/actioncreator';

const ProductDetails = (props) =>{

    const itemId = props.match.params.itemId;

    const productDetailChosen = useCallback((props)=> {props.detailInfo(itemId);},[])
    
    useEffect(()=>{
   
        productDetailChosen()

    }, [productDetailChosen])

console.log(props.prodDetails);
 
if(props.loading === true){
    return null;
 
}
if(props.error){
    return <div className="loader" style={{textAlign:"center", margin: "200px auto"}}></div>
}
return (
<div className="details-container">
    <h1> Details </h1>
    
    <div className="detailprop-container">
        <div className="detailimg-container">
            <img className="detail-img" src={props.prodDetails.photo} alt="" />
                </div>
        <div className="detailsprod-container">
            <div style={{padding: "20px"}}>
<h1>{props.prodDetails.title}</h1>
<h3 style={{paddingTop: "20px", paddingLeft:"20px", textAlign:"left", lineHeight: "1.8rem"}}>Description &nbsp; : &nbsp; {props.prodDetails.description} </h3>
<h3 style={{paddingTop: "20px"}}> Price &nbsp;:&nbsp; ₹ &nbsp;{props.prodDetails.price}  </h3>
<button className="btn-prop buy-btn-details">BUY</button>
               <button className="btn-prop cart-btn-details" onClick={() =>props.AdditemsToCart(props.prodDetails)}>Add to Cart</button>
</div>
        </div>
    </div>
    </div>
   
    )
}

const mapStateToProps = (state) => {
    return { 
  prodDetails: state.prdDetails.product,
  error: state.prdDetails.error,
  loading: state.prdDetails.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AdditemsToCart: (item) => dispatch(AddToCart(item)),
        detailInfo: (itemId) => {
            dispatch(ProductDetailsinfo(itemId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);