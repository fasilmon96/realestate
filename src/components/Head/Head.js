import "./Head.css";
import React from "react";

import { useContext } from "react";
import { AuthContext,Firebasecontext } from "../../store/Context";
import { useNavigate } from "react-router-dom";


function Head() {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(Firebasecontext)
  const Nav=useNavigate()
  return (
    <section>
      <div className="row">
        <div className="col-md-6">
          <img
            className="q"
            src="https://freepngimg.com/thumb/categories/2356.png"
            alt="post"
          />
          <h3 className="w">REAL ESTATE</h3>
          <h6 className="e">YOUR TITLE GOES HERE</h6>
        </div>
        <div className="col-md-6">
          <h4 className="mt-5 zx" >HOME1</h4>
          <h4 className="r">PRICE STARTS AT</h4>
          <h5 className="t">16500</h5>
          <button onClick={()=>{
            user ? Nav('') : Nav('/login') 
          }}  className="display1">{user ? `Welcome ${user.displayName} `:  'Login'}</button> 
         { user && <h4 onClick={()=>{
          firebase.auth().signOut();
          Nav('/login')
         }} className="display">Logout</h4> }
    
          <img
            className="y"
            src="https://cdn-icons-png.flaticon.com/512/25/25473.png"
            alt=""
          />
        </div>

     
      </div>
    </section>
  );
}

export default Head;
