import * as actionTypes from '../Types/types';
import baseAxios from '../../axios';

export const ProductDetailsinfo = (itemId) => async (dispatch) => {
   
    dispatch({
        type: actionTypes.PRODUCT_DETAILS_CATEGORY_LOADING
    })

   await baseAxios.get(`/item_by_id?id=${itemId}&type=single`)
    .then(results =>{
         dispatch({
             type: actionTypes.PRODUCT_DETAILS,
             payload: results.data[0]});
        
        }).catch(error => dispatch({
            type: actionTypes.PRODUCT_DETAILS_CATEGORY_ERROR,
            payload: error.message
        }))

}