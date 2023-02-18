import React from 'react'
import './Login.css'
import { useContext } from 'react'
import {useState } from 'react'
import { Firebasecontext } from '../../store/Context'
import { useNavigate } from 'react-router-dom'
function Login() {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{firebase}=useContext(Firebasecontext)
    const Navigate=useNavigate()
    
     const handleLogin=(e)=>{

      e.preventDefault()
      
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
         Navigate('/')

      })

     }
    
    

   
    

  return (
    <div className='aa'>
    <form onSubmit={handleLogin} >
    
     <div className='formcontrol1'>
        <label  htmlFor="">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <br />
        <input type="email"placeholder='email' name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        
     </div>
     <div className='formcontrol2'>
        <label htmlFor="">Password</label><br />
        <input type="password" placeholder='Enter password' name='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
     </div>
     
     <div className='formcontrol4'>
        <button className='as' type='submit'>Login</button>
     </div>
     </form>

     <div className='formcontrol5'>
     <button onClick={()=>Navigate('/signup')} className='bs' type='submit'>Signup</button>
     </div>

     </div>
     
  )
}

export default Login
