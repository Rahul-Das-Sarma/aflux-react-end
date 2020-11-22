import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { connect } from 'react-redux';
import {AllProductsInfo, AddToCart} from '../../store/actions/actioncreator';


const Home = (props) => {   
    


useEffect(() => {
    props.fetchProducts() 
},[])



const truncateString = (str, n) =>{
   return str?.length > n? str.slice(0, n-1) + "..." : str
}

// const AddtoCartHandler =() => {
//    // props.history.push(`/cart/${productId}`)
//    const item = props.prods.map(item => {
//       console.log(item._id);
//    })
 
// }
    

    return (
        <div className="card-container">        
        
         {props.loading === true ?
         <div className="loader" style={{textAlign:"center", margin: "200px auto"}}></div>
        : props.error? <div style={{textAlign:"center", margin:"auto"}}> {props.error} please refresh page again.. </div> 
        : props.prods.map(item =>{
             return(
                 
                <div key={item._id}  className="card" >
                   <Link to={`/${item._id}`} >
                <div className="card-image">
                    <img  className="img-container" src={item.photo} alt=""/>
                </div>
                </Link>
                <div className="card-info">
                    <p style={{marginBottom:"5px", maxWidth: "250px", margin:"auto"}}>{truncateString (item.title, 75)}</p>
                   <p style={{margin:"20px auto", fontSize: "14px", color: "#494949"}}>{truncateString(item.description, 40)}</p>
                   <p className="price-para" >₹ {item.price}</p>
              
                 
                   <button className="btn-prop cart-btn" onClick={() =>props.AdditemsToCart(item)} >Add to Cart</button>
                 
                </div>

            </div>
            
              )
         }
             ) } 
           
            
        </div>
    )
      
}

const mapStateToProps = (state) => { 
    console.log(state.prdt.products);
     return {
        loading: state.prdt.loading,
        prods: state.prdt.products,
        error: state.prdt.error,
        cart: state.cart.cartItems
    }
 
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(AllProductsInfo()),
        AdditemsToCart: (item) => dispatch(AddToCart(item))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Home);