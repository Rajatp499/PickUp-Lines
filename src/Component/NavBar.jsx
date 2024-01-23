import React, { useState } from 'react'
import "./NavBar.css"
import { NavLink, Outlet } from 'react-router-dom';

//icons
import { CiSearch } from "react-icons/ci";

const NavBar = () => {

  //search state
  const [search, setSearch] = useState(' ');

  //search function
  // const searchfn = (e) =>{
  //   console.log(search)
  //   setSearch(e.target.value)
  // }
  console.log(search)

  return (
    <>
    <div className="navbar">
        <div className="navbar-contents">
        <NavLink to="/"><div>L.O.G.O</div></NavLink>
          <div className="navbar-contents-centre">
            <div><NavLink to="favourite">Favourite</NavLink></div>
            <div><NavLink to="random">Random</NavLink></div>
            <div className="search">
              <input type="search" placeholder="Search" onChange={(e) =>{setSearch(e.target.value)}} value={search}></input>
              <button>
                <CiSearch className="search-icon" />
              </button>
            </div>
          </div>
          <div>Download</div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default NavBar
// export {NavBar , search}