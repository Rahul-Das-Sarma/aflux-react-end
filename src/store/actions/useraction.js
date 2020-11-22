import * as actionTypes from '../Types/types';
import baseAxios from '../../axios';



export const userSignUp = (fName, lName, email, password) => async (dispatch) => { 
    dispatch({
        type: actionTypes.USER_SIGNUP_REQUEST, payload: {email, password}
    })

try{
    const {data} = await baseAxios.post('/signup',{
        firstName: fName,
        lastName: lName,
        email,
        password
    })
    dispatch({
        type: actionTypes.USER_SIGNUP_SUCCESS,
        payload: data
    })
  
    // localStorage.setItem('userInfo', JSON.stringify(data));
}catch ( error)  {
        dispatch({
            type: actionTypes.USER_SIGNUP_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message            
        })
    }
}


export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: actionTypes.USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await baseAxios.post('/signin', { email, password });
    
      dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem("jwt",data.token)
     
      console.log(data);
    } catch (error) {
      dispatch({
        type: actionTypes.USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
   localStorage.removeItem("jwt")
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: actionTypes.USER_SIGNOUT });
  };

  export const userSigninDetails = () => (dispatch) => {
     
      const token = localStorage.getItem('jwt');
      const userInfo = localStorage.getItem('userInfo')
      if (token) {
    return    dispatch({type: actionTypes.USER_SIGNIN_SUCCESS,payload: userInfo ,token: token})
       
      } else {
       return null
      }
        
  }