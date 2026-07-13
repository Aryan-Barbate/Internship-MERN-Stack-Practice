import React from 'react'
import { useState,useEffect } from 'react'

const UseEffect = () => {

    let booktitle='Ikigai'
    const [price, setPrice] = useState(500)
    const [qn, setqn] = useState(1)
    let pr =500

    useEffect(() => {
      setPrice(pr*qn)
    }, [qn])
    
  return (
    <div className="container">
        <h2>Bookname:{ booktitle} </h2>
        <h2>Price:{price} </h2>
        <h2>Quantity:{qn} </h2>
        <button onClick={()=>{setqn(qn+1)}}>+</button>
        <button onClick={()=>{setqn(qn > 1 ? qn - 1 : 1)}}>-</button>
    </div>
  )
}

export default UseEffect