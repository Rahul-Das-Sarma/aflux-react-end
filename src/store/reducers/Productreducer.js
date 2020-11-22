
import * as actionTypes from "../Types/types"




const intitialState ={loading: true, products: [] }
const Productreducer = (state = intitialState, action) => {
    switch(action.type){

        case actionTypes.ALL_PRODUCT_LOADING:
            return{
                ...state,
                loading: true
            }

        case actionTypes.ALL:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
      
        case actionTypes.ALL_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
    

        case actionTypes.MEN_CATEGORY_LOADING:
                return{
                    ...state,
                    loading: true
                }

         case actionTypes.MEN:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

         case actionTypes.MEN_CATEGORY_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }   

         case actionTypes.WOMEN_CATEGORY_LOADING:
            return{
                ...state,
                loading: true
            }
              
         case actionTypes.WOMEN:
                return {
                        ...state,
                        loading: false,
                        products: action.payload
                    }

          case actionTypes.WOMEN_CATEGORY_ERROR:
          return{
            ...state,
            loading: false,
            error: action.payload
        }  

         case actionTypes.ELECTRONICS_CATEGORY_LOADING:
            return{
                ...state,
                loading: true
            }

         case actionTypes.ELECTRONICS:
               return {
                            ...state,
                            loading: false,
                            products: action.payload
                     }

         case actionTypes.ELECTRONICS_CATEGORY_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            } 

            default:
                    return  state
    }
 
}


export default Productreducer;