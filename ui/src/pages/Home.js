import React from 'react'
import { Product } from './Product'
import { Post } from './Post'
import { Service } from './Service'



const Home = () => {
 
 
  return (
    <div>
      <h1 style={{color:"red"}}>This is a Home </h1>
      <div>
        <Product/>
        <Post/>
        <Service/>
      </div>
    </div>
  )
}

export default Home