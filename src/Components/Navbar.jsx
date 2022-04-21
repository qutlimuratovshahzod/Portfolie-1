import React from 'react'
import {GrHomeRounded} from "react-icons/gr"
import {FaRegLightbulb} from "react-icons/fa"
import {BsPerson, BsTwitter, BsFillMoonFill} from "react-icons/bs"
import {SiGooglemessages} from "react-icons/si"
import {GoCalendar} from "react-icons/go"
import {AiOutlineBehance} from "react-icons/ai"
import {BiBasketball} from "react-icons/bi"
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{padding: "12px 62px", background: "#111827", borderRadius:" 24px"} } className="navbar " >
        <ul className='list-none flex justify-between items-center gap-2.5'>
            <li  style={{padding: "24px", background:"blue", borderRadius:" 16px"}} >
                <NavLink to={"/"}>
                <GrHomeRounded/>
                </NavLink>
            </li>
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}} >
                <NavLink to={"/projects"}>
                <FaRegLightbulb/>
                </NavLink>
            </li>
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <BsPerson/>
                </NavLink>
            </li>
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <SiGooglemessages/>
                </NavLink>
            </li> 
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <GoCalendar/>
                </NavLink>
            </li> 
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <BsTwitter/>
                </NavLink>
            </li>
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <AiOutlineBehance/>
                </NavLink>
            </li>
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <BiBasketball/>
                </NavLink>
            </li>
            <hr style={{background:"white"}} />
            <li  style={{padding: "24px", background:"blue",  borderRadius:" 16px"}}>
                <NavLink to={"/projects"}>
                <BsFillMoonFill/>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
