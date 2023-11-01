import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Ordersummary = () => {
  const Navigate=useNavigate();
  return (
    <>
    
    
    <div>Order  Page</div>
    <button onClick={()=>Navigate('Home',{replace:true})}>Place order</button>
    
   
    </>
   

  )
}
