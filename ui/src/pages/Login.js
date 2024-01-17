import React, { useState,useEffect, useInsertionEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import useAuth from './userAuth';







// export const UserContext =createContext();
const Login = () => {
  const {auth,setAuth} = useAuth();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage]=useState()
    const [error,setError]=useState()
    const [loading, setLoading] = useState(false)
    const  navigate= useNavigate()

     
      const loginHandle= async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
 const response= await fetch("http://localhost:5000/login",{
     method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
       
        email,
        password
    })
 })
 if(response.ok){
  const data = await response.json();
  window.localStorage.setItem("user", data.token)
  // setAuth( {data})
  console.log ("This is auth auth",auth)
  console.log(data);
  alert(data.message)

  
  if(data.token){
    navigate("/dashboard")
  }else{
    navigate("/")
  }

 }
 
//  setAuth({data})
 
// .then(res=> res.json())



/*
.then(da=>{
console.log(da)
setAuth({da})
*/
//  console.log(auth?.data?.role)

//This is authorization in this page
// if(data.email && data.role==="admin"){
// navigate("/dashboard")
// }else if(data.email){
// navigate("/user")
// }else{
//   console.log("user does not exist")
// }

// if (auth.da === undefined) {
//   return <h1>Loading...</h1>;
// }

// if(da==="admin"){
//   navigate("/dashboard")
// }else if(da==="user"){
//   navigate("/user")
// }

// if(result ==="exist"){
//   // e.target.reset()
//   navigate("/dashboard")
// }

/*
})
*/
} catch(error){
console.log("error message", error.message)
}finally{
  setEmail("")
  setPassword("")
}

    }
//     useEffect(() => {
//       // if (auth.data.role==="admin") {
//       //   console.log(auth.data); // add your logs here to see the updates after re-render
//       //   navigate("/dashboard");
//       //   setAuth({data})
//       // }
// loginHandle()
//     });

    
  return (
  
<>
<div>
  
  
</div>

    <div className='login__section'>    
        
    {auth==="null" && <h1>Messages:user not found</h1>}
         <h1 className='login__form__name'>Login  Form</h1>

         <form className='login__form' onSubmit={loginHandle}>
        
            <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <input className='submit__btn' type='submit' value="Login"/>
         </form>

    </div>
    </>
  )
}

export default Login 





  


 