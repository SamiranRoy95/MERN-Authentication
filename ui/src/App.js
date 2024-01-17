
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Nabvar from './pages/Nabvar';
import Registration from './pages/Registration';
import {  Route,Routes } from 'react-router-dom'
import User from './pages/User';
import NotFound from './pages/NotFound';
import ProductManagement from './pages/ProductManagement';
import PrivateRoute from './pages/PrivateRoute';
// import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <>
    <div className="App">
      {/* <h1>This is Registration and Loging App</h1> */}
      {/* <Registration />
        <Login /> */}
        <Nabvar/>
       
       <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login'  element={<Login/> } />
        <Route path='/register'  element={<Registration/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>}/>
         */}
        <Route path="/user" element={<User/>}/>
        

        {/* <Route path='/user' element={  <PrivateRoute>  <User/>  </PrivateRoute> }/> */}

        <Route
          path="/dashboard" element={  <PrivateRoute>  <Dashboard/> </PrivateRoute>  }
        />
        {/* <Route path='/user' element={<User/>}/> */}
        <Route path="/product" element={<ProductManagement/>}/>
        <Route path='*' element={<NotFound/>}/>
        
        {/* <PrivateRoute path="/admin"/> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
