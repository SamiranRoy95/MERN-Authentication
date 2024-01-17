


import { Navigate } from "react-router-dom";
import useAuth from "./userAuth";


function AdminRoute({ children }) {
  const auth = useAuth();
  return auth.da.email ? <>{children}</> : <Navigate to="/login" />;
}
export default AdminRoute

















// import React from 'react'
// import useAuth from './userAuth'
// import { useLocation,Navigate } from 'react-router-dom'

// const AdminRoute = ({children}) => {
//     const {auth}=useAuth()

//     if (auth.da.email && auth.da.role==="admin"){

//         return children 
//     }else{
//       <Navigate to="login" replace/>
//     }
//   // return (
//   //   <div>AdminRoute</div>
//   // )
// }

