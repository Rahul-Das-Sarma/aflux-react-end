import React, { useEffect, useState } from "react";
import "./signin.css";
import {Link} from "react-router-dom";
import {connect} from  "react-redux";
import {signin} from "../../store/actions/actioncreator";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserSignin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const SigninHandler = () => {
   props.SigninDispatch(email, password);
    }

    useEffect(() => {
        if(props.SigninInfo.token !== null){
        props.history.push('/')
        }
    },[props.SigninInfo.userInfo])

    return(
        <div className = "container signin-container" >
             {props.SigninInfo.loading &&  <div className="loader" style={{textAlign:"center", margin: "200px auto"}}></div>}
             {props.SigninInfo.error &&  toast(props.SigninInfo.error) && <ToastContainer /> }
           <div className="NewProduct-card-signin">
              
            <div style={{textAlign:"center"}}>
            <h1 className="heading-1" style={{paddingBottom: "25px", paddingTop: "15px"}}>Sign in with your account </h1>
            </div>
            
            <div className="form">
            
            
               <div className="form-name">
           <input className="Input-Styles" onChange={(e) => setEmail(e.target.value)}  autoComplete="off" type="email" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">User Email</span></label>
           </div>

           <div className="form-price">
           <input className="Input-Styles"autoComplete="off" onChange={(e) => setPassword(e.target.value)} type="password" required ></input>
          <label htmlFor="price" className="label-price"><span className="content-price">Password</span></label>
           </div>  
           
         
          <div className="upload-Button">
              <button className="btn-upload signin-btn" onClick={SigninHandler}>Sign in</button>
          </div>
          <p style={{textAlign:"center", paddingBottom: "40px"}}>Don't have an account ? <Link to="/signup">Sign up here.</Link> </p>
           </div>

            </div>
            
        </div>
    )  

}
const mapStateToProps = (state) => {
    return {
        SigninInfo: state.UserSignIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SigninDispatch: (email, password) => {
            dispatch(signin(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignin); 