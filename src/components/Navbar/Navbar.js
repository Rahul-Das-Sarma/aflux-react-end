import React, { useState } from 'react';
import './nav.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, withRouter} from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import {connect} from 'react-redux';
import {signout} from '../../store/actions/actioncreator';



const Navbar = (props) => {
  const [icon, setIcon] = useState(true);

  
  console.log(props.userSignInState.token);


const onLogout = () =>{
 return props.signOutDispatch();
 
}

    const HandleClick = () => {
      const ToggleMenu = document.getElementById("dropDownMenu")
      
 //  return( ToggleMenu.className === "top-nav-right" ? ToggleMenu.className += " responsive" : ToggleMenu.className = "top-nav-right")
    if( ToggleMenu.className === "top-nav-right"){
      ToggleMenu.className += " responsive"      
      setIcon(false)
    }else{
      ToggleMenu.className = "top-nav-right"    
      setIcon(true)
    }
      }
      
    return(
        <nav className="top-nav" > 
               <h1 className="img-logo"><Link to='/' style={{textDecoration: "none", color:"black"}}>Aflux</Link></h1>
               <div>
               <button onClick={HandleClick} className="menu-icon" >{icon === true? <MenuIcon style={{color: "black", verticalAlign:"middle"}} />: <ClearIcon style={{color: "black", verticalAlign:"middle"}} />}</button>
             <ul className="top-nav-right" id="dropDownMenu"> 
                 <li className="on-active" ><Link to="/category" style={{textDecoration: "none", color:"black"}}>Categories</Link></li>
                 {props.userSignInState.token !== null? <li className="on-active" style={{color:"black"}} onClick={onLogout} >Sign out</li> : <li className="on-active"><Link to="/signin" style={{textDecoration: "none", color:"black"}} >  Signin </Link></li>  }
                
                  
                 <li className="on-active"><Link to="/cart"><ShoppingCartIcon style={{color: "black"}} /><span className="cart-nos">{props.cart.length}</span></Link></li>  
                             
                 </ul>
             </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
  console.log(state.UserSignIn);
  return {
        cart : state.cart.cartItems,
        userSignInState : state.UserSignIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOutDispatch: () => {
      dispatch(signout())
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));