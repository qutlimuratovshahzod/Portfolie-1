import React from 'react'
import { HeaderBrend } from "../Components/HeaderBrend"
import { Navbar } from '../Components/Navbar'
export const Home = () => {
  return (
    <div className="Home">
      <header>
        <HeaderBrend />
      </header>
      <div className="header-content" style={{
        color: "#FFFFFF"
      }}>
        <h1 style={{
          padding: "219px 515px 29px 200px",
          fontWeight: "700",
          fontSize: "42px",
        }}>
          Hello!👋🏻 <br /> My name is Ololade <br /> I’m a Product Designer
        </h1>
        <p style={{ padding: "30px 515px 100px 200px", }}>Let me help you grow your business and make your product look pretty while at it </p>
       <div style={{padding: "35px 515px 130px 200px",}} className="btns">
        <button className='btn' style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "13px 58px",
          background: "#188AEC",
          borderRadius: "8px",
          boxShadow: "5px -10px #1F2937",
          border: "2px solid #188AEC",
        }}>Say Hello</button>
        </div>
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  )
}
