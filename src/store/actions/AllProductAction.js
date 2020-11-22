import * as actionTypes from "../Types/types";
import baseAxios from '../../axios';


export const AllProductsInfo = () => async dispatch => {
    dispatch({
        type: actionTypes.ALL_PRODUCT_LOADING,
        })
   
      await baseAxios.get('/').then(resultData =>{
        dispatch({
            type: actionTypes.ALL,
            payload: resultData.data
        })
      
      } ).catch(err=> dispatch({
          type: actionTypes.ALL_ERROR,
          payload: err.message
        }))
     
}

export const MenProductsInfo = () => async dispatch => {
dispatch({
    type: actionTypes.MEN_CATEGORY_LOADING
})

     await baseAxios.get('/mens').then( resultData => {
        dispatch({
            type: actionTypes.MEN,
            payload: resultData.data
        })
    }).catch(err=> dispatch({
        type: actionTypes.MEN_CATEGORY_ERROR,
        payload: err.message
    }))

    }


 export const WomenProductsInfo = () => async dispatch => {
    dispatch({
        type: actionTypes.WOMEN_CATEGORY_LOADING
    })
    
         await baseAxios.get('/womens').then( resultData => {
            dispatch({
                type: actionTypes.WOMEN,
                payload: resultData.data
            })
        }).catch(err=> dispatch({
            type: actionTypes.WOMEN_CATEGORY_ERROR,
            payload: err.message
        }))
    }

 export const ElectronicProductsInfo = () => async dispatch => {
 dispatch({
     type: actionTypes.ELECTRONICS_CATEGORY_LOADING
 })
 
    await baseAxios.get('/electronics').then(resultData =>{
        dispatch({
            type: actionTypes.ELECTRONICS,
            payload: resultData.data
        })
    }).catch(err=>dispatch({
        type: actionTypes.ELECTRONICS_CATEGORY_ERROR,
        payload: err.message
    }))

    }