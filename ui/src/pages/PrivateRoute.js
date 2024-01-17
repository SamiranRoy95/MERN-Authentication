
import { useNavigate ,Navigate} from "react-router-dom";

import useAuth from "./userAuth";
// const Navigate=useNavigate();



function PrivateRoute({ children }) {
  // const auth = useAuth();
  
  // const navigate=useNavigate()
  // console.log(auth.data)
  const user=window.localStorage.getItem("user");
  if(!user){
    return <Navigate to="/" replace />

    // navigate("/")
  }
  // return auth.da.email ? <>{children}</> : <Navigate to="/login" />;

  return children
}
export default PrivateRoute;



