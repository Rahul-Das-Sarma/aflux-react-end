import React, { useEffect } from 'react';
import NavBar from './Navbar/Navbar';
import AddNewProduct from './addNewProds/addNewProducts';
import { Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import Categories from "./Category/category"
import MensClothing from "./mens/mens";
import WomensClothing from "./womens/womens";
import Electronics from "./electronics/electronics";
import ProductDetails from "./productdetails/productdetails";
import Cart from "./cart/cart";
import Signin from "./authentication/signin";  
import Signup from "./authentication/signup";
import {connect} from 'react-redux';
import {userSigninDetails} from "../store/actions/actioncreator";
import ShippingAddress from "./shippingaddress/shippingaddress";
import OrderDetails from "./orderDetails/orderDetails";
import DeliveryInformation from "./delivery-info/delivery"

const EcomStore = (props) => {

    useEffect(() => {
   props.onFindUserDetail()
    },[])

return(
    <div>
      
     <NavBar />
     <Switch>
     <Route path="/addnewproduct" exact component={AddNewProduct} />
     <Route path="/" exact component={Home} />
     <Route path="/category" exact component={Categories} />
     <Route path="/category/men clothing" exact component={MensClothing} />
     <Route path="/category/women clothing" exact component={WomensClothing} />
     <Route path="/category/electronics" exact component={Electronics} />
     <Route path="/cart" exact component={Cart} />
     <Route path= "/signin" exact component={Signin} />
     <Route path= "/signup" exact component={Signup} />
     <Route path= "/shipping-address" exact component={ShippingAddress} />
     <Route path= "/order-details" exact component={OrderDetails} />
     <Route path="/delivery-info" exact component={DeliveryInformation} />
     <Route path={"/:itemId"}  component={ProductDetails} />
     
     </Switch>
    </div>
)

}

const mapDispatchToProps = (dispatch) => {
    return {
        onFindUserDetail: () => {
            dispatch(userSigninDetails())
        }
    }
}

export default connect(null, mapDispatchToProps)(EcomStore);