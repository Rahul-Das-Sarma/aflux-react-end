import React, { useCallback,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {ElectronicProductsInfo,AddToCart} from '../../store/actions/actioncreator'

const Electronics= (props) => {

    
    const fetchProductsforStore = useCallback(() => { props.fetchProducts();},[])
  
    useEffect(()=>{
     fetchProductsforStore()
    },[fetchProductsforStore])
 
    
    function truncateString(str, n) {        
     return str?.length > n?  str.slice(0, n-1) + "..." : str       
 }
 
 

 if(props.loading === true ){
    return <div className="loader" style={{textAlign:"center", margin: "200px auto"}}></div>
 
}

if(props.error){
   return <div className="loader" style={{textAlign:"center", margin: "200px auto"}}></div>
}
   return(  <div>
       <div className="category-header">
           <h4 style={{marginBottom:"10px", color:"#363636"}}>Electronics</h4>
           <hr style={{maxWidth:"400px"}} />
       </div>
   <div className="card-container">
     {props.prods.map(item=> {
         return(
             <div  key={item._id}  className="card" >
                 <Link to={`/${item._id}`} >
             <div className="card-image">
                 <img  className="img-container" src={item.photo}/>
             </div>
             </Link>
             <div className="card-info">
                 <p style={{marginBottom:"5px", maxWidth: "250px", margin:"auto"}}>{item.title}</p>
                <p style={{maxWidth: "250px",margin:"10px  auto", fontSize:"14px",color: "#494949"}}>{ truncateString(item.description,40)}</p>
                <p className="price-para">₹ {item.price}</p>
              
               
                <button className="btn-prop cart-btn" onClick={() =>props.AdditemsToCart(item)}>Add to Cart</button>
              
             </div>
  
         </div>
         )
 
     })}
         
        </div>
        </div>)
 }
 
 const mapStateToProps = (state) => { 
    console.log(state.prdt.products);
     return {
        loading: state.prdt.loading,
        prods: state.prdt.products,
        error: state.prdt.error
    }
 
}

const mapDispatchToProps = (dispatch) => {
    return {
        AdditemsToCart: (item) => dispatch(AddToCart(item)),
        fetchProducts: () => dispatch(ElectronicProductsInfo())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Electronics);