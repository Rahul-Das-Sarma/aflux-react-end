import * as actionTypes from '../Types/types';


export const AddToCart = ( item) => async (dispatch, getState ) =>  {
   

    dispatch({
        type: actionTypes.CART_ADD_ITEM,
        payload: {
            title: item.title,
            price: item.price,
            photo: item.photo,
            product: item._id,
            productqty: 1
                 }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const RemoveFromCart = (item) => async( dispatch, getState) => {
dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: {
       product : item.product,
       price: item.price,
         }       
})
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const increaseQuantity = (item) => async (dispatch, getState ) =>  {
   

    dispatch({
        type: actionTypes.INCREASE_QUANTITY,
        payload: {            
       title: item.title,
       product: item.product,
       price: item.price,
       productqty: 1
                 }
            })
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const decreaseQuantity = (item) => async (dispatch, getState) => {

dispatch({
    type: actionTypes.DECREASE_QUANTITY,
    payload:{
        product: item.product,
        title: item.title,
        price: item.price
    }
})
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const saveShippingAddress = (fname, lname, pincode, hNo, fullAddress) => (dispatch) => {
    dispatch({ type: actionTypes.SAVE_SHIPPING_ADDRESS, payload: {fname, lname, pincode, hNo, fullAddress} });
    localStorage.setItem('shippingAddress', JSON.stringify({fname, lname, pincode, hNo, fullAddress}));
}