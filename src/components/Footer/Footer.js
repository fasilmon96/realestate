import React from 'react'
import './Footer.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const Navigate =useNavigate()
  return (
    <section>
   <div className="row">
    <div className="col-md-4">

        <img className='zz' src="https://cdn-icons-png.flaticon.com/512/46/46854.png" alt="" />
        <h2 className='xx'>+91 8891 116 784</h2>

    </div>
    <div className="col-md-4 ">
      
     <Button onClick={()=>Navigate('/booknow')} className='cc'>BOOK NOW</Button>

    </div>
    <div className="col-md-4">
       <img className='pp' src="https://i.pinimg.com/originals/d8/10/55/d81055d32cf810a6d527b5eb9ae20f08.png" alt="" />
       <h3 className='ooq'>www.reales.com</h3>
    </div>

   </div>
        






    </section>
   
  )
}

export default Footer