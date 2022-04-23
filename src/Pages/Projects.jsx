import React from 'react'
import { HeaderBrend } from '../Components/HeaderBrend'

export const Projects = () => {
  return (
    <div className="Projects">
      <div className="navbar-brand">
        <HeaderBrend />
      </div>
      <div className="header">
        <h1 style={{ padding: "130px 515px 20px 200px",
          fontWeight: "500",
          fontSize: "42px"}}>
        Projects 💡
        </h1>
        <p  style={{ padding: "5px 515px 29px 200px"}}>Some things i’ve been working on in the past few years:</p>
      </div>
      <div className="header-content" style={{padding: "65px 150px 55px 200px"}}>
        <div className="content-text">
        <h2>Remotely</h2>
        <p>Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.</p>
        <button className='btn' style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "13px 58px",
          background: "#188AEC",
          borderRadius: "8px",
          boxShadow: "5px -10px #1F2937",
          border: "2px solid #188AEC",
        }}>View project</button>
        </div>
        <div className="img">
          <img src='../img/img.png' alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="img">
          <img src="../img/img-1" alt="" />
        </div>
        <div className="text-1">
          <h2>Brutal Design Library</h2>
          <p>Brutal is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.</p>
          <button className='btn' style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "13px 58px",
          background: "#188AEC",
          borderRadius: "8px",
          boxShadow: "5px -10px #1F2937",
          border: "2px solid #188AEC",
        }}>View project</button>
        </div>
      </div>
    </div>
  )
}
