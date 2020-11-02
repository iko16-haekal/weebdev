import React from "react"
import Image from "../image"
import "./style.css"
import Link from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
            <AniLink fade to="/" className="nav-item nav-link mx-2">
              home
            </AniLink>
            <AniLink fade to="/tema" className="nav-item nav-link mx-2">
              tema
            </AniLink>
            <AniLink fade to="/paketharga" className="nav-item nav-link mx-2">
              paket harga
            </AniLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
