import React from 'react'
import { HeaderBrend } from '../Components/HeaderBrend'

export const AboutMe = () => {
  return (
    <div className="">
      <header>
      <HeaderBrend/>
      </header>
    <div className='w-4/5 m-auto min-h-screen pt-28'>
      
        <h1 className='text-5xl text-white'>About Me 👨‍</h1>
        <p className='text-2xl text-white mt-10 mb-16'>A brief intro to who i am and how i do what i do: </p>
        <p className='text-2xl text-white mt-10 mb-5'>I am   <span className='text-5xl text-white mt-14'>OLOLADE</span></p>
        <div style={{padding:"24px 615px 40px 0px"}} className="text-middle">

        <p className='text-2xl text-white'>A web designer from Nigeria. I got into tech while i was student at olabisi onabanjo university, Bsc Zoology. I've always been fascinated with how things work. fast forward to 2 years later and i'm now designing landing pages for business around the world.
        </p>
        <p className='text-2xl text-white pt-7'>
        I believe i’ve got the right skills and technologies to take your online presence on the level it truly deserves. Your website should be your no1 sales agent and its works 24/7, Get a quote now that’s best for your business.</p>
        
        </div>
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
  )
}