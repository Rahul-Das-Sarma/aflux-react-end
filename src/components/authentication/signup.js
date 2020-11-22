import React, { useEffect, useState } from "react";
import "./signup.css";
import {connect} from 'react-redux';
import {userSignUp} from '../../store/actions/actioncreator';
import {ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



const submitHandler = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    
        return toast("Invalid email");
    }
    if(password !== confirmPassword){
        toast("Password do not match!");
    }else{
      props.onuserSignup(fName, lName, email, password)    
    
      
    }
}


useEffect(() => {
if(props.userinfoOnSignup.userInfo){
    props.history.push('/signin');
    toast("Signed up Successfully");
}
}, [props.userinfoOnSignup.userInfo])


    return(
        <div className = "container signin-container" >
           <div className="NewProduct-card-signin">
            <div style={{textAlign:"center"}}>
            <h1 className="heading-1">Sign Up </h1>
            </div>
            
            <div className="form">
            {props.userinfoOnSignup.loading &&  <div className="loader" style={{textAlign:"center", margin: "200px auto"}}></div>}
             {props.userinfoOnSignup.error &&  toast(props.userinfoOnSignup.error) }
              
             <ToastContainer />
         
               <div className="form-name firstName">
           <input className="Input-Styles" onChange={e => setFName(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">First Name</span></label>
           </div>
           <div className="form-name lastName">
           <input className="Input-Styles" onChange={e => setLName(e.target.value)}  autoComplete="off" type="text" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Last Name</span></label>
           </div>
           <div className="form-name email">
           <input className="Input-Styles" onChange={e => setEmail(e.target.value)}  autoComplete="off" type="email" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">User Email</span></label>
           </div>

           <div className="form-name password">
           <input className="Input-Styles" onChange={e => setPassword(e.target.value)} autoComplete="off" type="password" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Password</span></label>
           </div>  

           <div className="form-name password">
           <input className="Input-Styles" onChange={e => setConfirmPassword(e.target.value)} autoComplete="off" type="password" required ></input>
          <label htmlFor="title" className="label-title"><span className="content-title">Confirm Password</span></label>
           </div>  
           
         
          <div className="upload-Button">
              <button className="btn-upload signin-btn" onClick= {submitHandler} >Sign up</button>
          </div>
          
          <p style={{textAlign:"center", paddingBottom:"20px"}} >Already Have an account?<Link to='/signin'>Sign in Here</Link> </p>
           </div>
          
            </div>
            
        </div>
    )  

}
const mapStateToProps = (state) => {
    return {
        userinfoOnSignup: state.userSignupOf
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onuserSignup: (fName, lName, email, password) => {
            dispatch(userSignUp(fName, lName, email, password))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup); 