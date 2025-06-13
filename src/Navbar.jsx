import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation(); // Get current route path
  return (
    <>
    <nav className="navbar p-3 bg-dark navbar-dark navbar-expand-lg navbar-light bg-light fixed-top w-100 z-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i>Fabel Bakery</i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`} to="/blog">Blog</Link>
        </li>
      </ul>
      <Link to="/" className='ms-4 px-4 py-2 text-white'style={{backgroundColor:"#B28564", textDecoration:"none"}} >BOOK NOW</Link>
    </div>
  </div>
</nav>
    
    </>
  )
}
