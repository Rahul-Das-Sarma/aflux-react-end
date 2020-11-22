import * as actionTypes from '../Types/types';

const initialState = {loading: true, product: []}
const productDetailsReducer = (state = initialState, action) => {
switch(action.type){
    case actionTypes.PRODUCT_DETAILS_CATEGORY_LOADING:
        return {
            ...state,
            loading: true
        }
    case actionTypes.PRODUCT_DETAILS: 
    return{
        ...state,
        loading: false,
        product: action.payload
    }
    case actionTypes.PRODUCT_DETAILS_CATEGORY_ERROR: 
    return{
        ...state,
        loading: false,
        product: action.payload
            }
default:
    return state
        }
}

export default productDetailsReducer;