import React from 'react'
import ProductManagement from './ProductManagement'
import UserManagement from './UserManagement'
import useAuth from './userAuth'
import { Link } from 'react-router-dom';


function Dashboard() {
  // const {auth} = useAuth();
  // console.log(auth.data.email) 
  // console.log(auth.data)
  // console.log(auth)
  
  const user=window.localStorage.getItem("user");
  console.log(user);
  return (
    <div>This is Dashboard 
<Link to="/product">Product</Link>
      
      <UserManagement/>
    </div>
  )
}

export default Dashboard