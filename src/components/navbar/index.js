import { Link } from "gatsby"
import React from "react"
import Image from "../image"
import "./style.css"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand">
          <div style={{ width: `175px` }}>
            <Image alt="logo weebdev" filename="logo.png" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link mx-2">
              Home
            </Link>
            <Link className="nav-item nav-link mx-2">Tema</Link>
            <Link to="paketharga" className="nav-item nav-link mx-2">
              Paket harga
            </Link>
            <Link className="nav-item nav-link ml-2">Layanan pendukung</Link>
            <Link className="nav-item nav-link ml-2" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
