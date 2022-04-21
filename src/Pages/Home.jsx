import React from 'react'
import {HeaderBrend} from "../Components/HeaderBrend"
import { Navbar } from '../Components/Navbar'
export const Home = () => {
  return (
    <div className="Home">
      <header>
        <HeaderBrend/>
      </header>
      <div className="header-content">
        <h1>
          Hello!👋🏻
          My name is Ololade
          I’m a Product Designer
        </h1>
        <p>Let me help you grow your business and make your product look pretty while at it </p>
        <button>Say Hello</button>
      </div>
      <div className="">
        <Navbar/>
      </div>
    </div>
  )
}
