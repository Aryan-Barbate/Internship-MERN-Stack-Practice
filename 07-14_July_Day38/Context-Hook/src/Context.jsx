import React, { createContext,useContext } from 'react'

let MyContext = createContext();

const Context = () => {
    let user = "Ayush"
  return (
    <MyContext.Provider value={user}>
        <Fun1/>
    </MyContext.Provider>
  )
}

export default Context


function Fun1() {
    return  <Fun2/>
}

function Fun2() {
    let user = useContext(MyContext)
    return  <h1>Hello {user} </h1>
}