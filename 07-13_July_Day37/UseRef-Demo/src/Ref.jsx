import { useRef, useState } from "react"

export default function Ref(){
    // useref -
    let username="admin"
    let pass="admin@123"

    let myref=useRef("")
    const [user,setUser]=useState("")

    function getSubmit(){
       console.log(myref.current.value);
       myref.current.style.color="red"
       myref.current.style.backgroundColor="yellow"
        setUser("Hello "+myref.current.value)
    }

   return <>
    <input type="text" name="" id=""  placeholder="Enter your name...." ref={myref}/>
    <input type="text" name="" id="" placeholder="Enter your password" />
    <button onClick={()=>{getSubmit()}}>LOGIN</button>
    <h1>{user}</h1>
   </>
}