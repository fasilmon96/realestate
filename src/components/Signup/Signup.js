import React from 'react'
import './Signup.css'
import {useState,useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { Firebasecontext } from '../../store/Context'





function Signup() {
  

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const{firebase}=useContext(Firebasecontext)

   const Nav =useNavigate()
  
     const handleSubmit=(e=>{
      e.preventDefault()
       
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName}).then(()=>{
         firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone,
         }).then(()=>{
               Nav('/login')
                
         })
      })
    })
 

     })
 

    
   

  return (
    <div>
    <form  onSubmit={handleSubmit}  >
     <div className='formcontrol'>
        <label htmlFor="">Username</label> <br />
        <input type="text" placeholder='name'
        name='username' id='fname'
        
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
     />
     

     </div>
     <div className='formcontrol1'>
        <label  htmlFor="">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <br />
        <input type="email"placeholder='email'
        name='email' id='femail'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        
     </div>
     <div className='formcontrol2'>
        <label htmlFor="">Password</label><br />
        <input type="password" placeholder='Enter password'
       name='password' id='fpassword'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
     </div>
     <div className='formcontrol3'>
        <label htmlFor="">Phone&nbsp;&nbsp;&nbsp;&nbsp;</label><br />
        <input type="number" placeholder='Enter number'
        name='phone' id='fphone'
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}/>
     </div>
     <div className='formcontrol4'>
        <button  className='as' type='submit'>Signup</button>
     </div>
     </form>


     <div className='formcontrol5'>
     <button onClick={()=>Nav('/login')} className='bs' type='submit'>Login</button>
     </div>
     </div>
     
  )
}

export default Signup
