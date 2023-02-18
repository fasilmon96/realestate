import React, { useContext, useState } from "react";
import "./Booknow";
import { Firebasecontext,AuthContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

function Booknow() {
  const[name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[phone,setPhone]=useState('')
  const{firebase}=useContext(Firebasecontext)
  const{user}=useContext(AuthContext)
  const Nav=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

     firebase.firestore().collection('Booknow').add({
      name,
      price,
      phone,
      userId:user.uid
     }).then(()=>{
        Nav('/')
     })
     console.log(handleSubmit)

  }
 


  return (

    <form onSubmit={handleSubmit} >
    <div className='formcontrol'>
       <label htmlFor="">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <br />
       <input type="text" placeholder='name' name="name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       
      
       
       />
   
        
    </div>
    <div className='formcontrol1'>
       <label  htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chose home price</label> <br />
       <input type="text"placeholder='Chose home price'
       value={price}
       onChange={(e)=>setPrice(e.target.value)}
      />
       
    </div>
   
    <div className='formcontrol3'>
       <label htmlFor="">Phone&nbsp;&nbsp;&nbsp;&nbsp;</label><br />
       <input type="number" placeholder='Enter number' name="phone"
       value={phone}
       onChange={(e)=>setPhone(e.target.value)}
      />
    </div>
    <div className='formcontrol4'>
       <button className='as' type='submit'>Pls Book now</button>
    </div>
    </form>

    
  );
}

export default Booknow;
