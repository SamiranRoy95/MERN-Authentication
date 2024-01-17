import React, { useState } from 'react';
import "./Registration.css";


const Registration = () => {
   
    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    async function registerHandle(e){
        e.preventDefault();
  const response= await fetch("http://localhost:5000/register",{
method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name,
        email,
        password,
    }),
 })



const data = await response.json();
console.log(data)
setEmail("")
setName("")
setPassword("")
    }

  return (
    <div className='register__section'>
         <h1 className='register__form__name'> Registration Form</h1>
         <form className='register__form' onSubmit={registerHandle}>
            <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <br/>
            <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <input className='submit__btn' type='submit' value="Register"/>
         </form>

    </div>
  )
}

export default Registration ;