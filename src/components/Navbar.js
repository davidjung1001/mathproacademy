import './Navbar.css'
import { Link } from 'react-router-dom'


import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
            <h1>Math Pro Academy</h1>
            </Link>
            <Link to="/about">
              Learn More
            </Link>
            <Link to="/contact">
              Schedule Consultation
            </Link>
           
            
            
            

        </nav>
    </div>
  )
}
