import React from 'react'
import { HeaderBrend } from '../Components/HeaderBrend'
import img from '../img/img-1.png'
import img1 from "../img/img.png"

export const Projects = () => {
  return (
    <div className="Projects">
      <HeaderBrend/>
    <div className='min-h-screen p-44'>
      <h1 className='text-5xl text-white '>Projects 💡</h1>
      <p  className=' mt-10 mb-16'>Some things i’ve been working on in the past few years:</p>
      <div className='flex mb-32'>
        <div className="w-2/5 mr-32">
          <h2 className='font-bold text-white text-4xl'>Remotely</h2>
          <p className="mt-10 mb-16">Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.</p>
          <button className='btn hover:scale-125' style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "13px 58px",
          background: "#188AEC",
          borderRadius: "8px",
          boxShadow: "5px -10px #1F2937",
          border: "2px solid #188AEC",
        }}>Say Hello</button>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="flex">
        <img className='mr-32' src={img} alt="" />
        <div className="w-2/5 mr-32">
          <h2 className='font-bold text-white text-4xl'>Brutal Design Library</h2>
          <p className="mt-10 mb-16">Brutal is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.</p>
          <button className='btn hover:scale-125' style={{
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
    </div>
  </div>
  )
}