import React from 'react';
import { Link } from "react-router-dom";
import "./Nabvar.css"

const Nabvar = () => {
  return (

    <div className='navbar'>

      <div className='navbar__link'>
        {/* <h2>Nabvar</h2> */}

        <Link className='each__link' to="/register">Register</Link>
        <Link  className='each__link'to="/login">Login</Link>

      </div>
    </div>
  )
}

export default Nabvar