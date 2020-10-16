import React from "react"
import "./style.css"
function Card({ icon, title, description }) {
  return (
    <>
      <div
        className="card py-4 card-bg"
        style={{
          color: "white",
          height: "100%",
          backgroundColor: "#128ECE",
        }}
      >
        <span className="text-center" style={{ fontSize: "3em" }}>
          <i className={icon} aria-hidden="true"></i>
        </span>
        <div className="card-body">
          <h5 className="card-title text-center text-white font-weight-bold">
            {title}
          </h5>
          <h6 class="card-text text-white text-center ">{description}</h6>
        </div>
      </div>
    </>
  )
}

export default Card
