import * as actionTypes from '../Types/types';

const CartReducer = (state = { cartItems: []}, action) => {
switch(action.type) {
case actionTypes.CART_ADD_ITEM:
     
        
        const item = action.payload;
     
        
             
        const existItem = state.cartItems.find((existingItem) => existingItem.product === item.product);
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((newItem) =>
            newItem.product === existItem.product ? item : newItem
            )
           
          };
        } else {
          return { ...state, cartItems: [...state.cartItems, item], totalAmount: state.totalAmount + item.price };
        }
  case actionTypes.INCREASE_QUANTITY: 
   
  const onRecieveActionPayload = action.payload;

  return {
    ...state,    
    cartItems: state.cartItems.map(product =>
      product.product === onRecieveActionPayload.product
        ? {...product,
           productqty: product.productqty + 1,
            }
        : product,
    ),
  };

  case actionTypes.DECREASE_QUANTITY: 
  const decreasePayload = action.payload
  
 return{
   ...state,
      cartItems : state.cartItems.map(decreaseProduct => 
    decreaseProduct.product === decreasePayload.product ? {
      ...decreaseProduct,
       productqty: decreaseProduct.productqty !== 1 ? decreaseProduct.productqty - 1 : 1
      } : decreaseProduct) 
 }
case actionTypes.CART_REMOVE_ITEM: 

return {
  ...state,
    totalAmount: state.totalAmount - action.payload.price,
    cartItems: state.cartItems.filter((leftOverproducts) => leftOverproducts.product !== action.payload.product),
};

case actionTypes.SAVE_SHIPPING_ADDRESS:

return {
  ...state, 
  shippingaddress: action.payload
}
        default:
            return state;
}
} 

export default(CartReducer);