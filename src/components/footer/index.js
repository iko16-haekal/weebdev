import React from "react"
import Image from "../image"
import "./style.css";
function Footer() {
  return (
    <footer
      class="page-footer font-small text-white pt-4 pb-5"
      style={{ backgroundColor: "black" }}
    >
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mt-md-0 mt-3">
            <h5 class="text-uppercase">map</h5>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3" />

          <div class="col-md-4 mb-md-0 mb-3">
            <div style={{ maxWidth: "200px", }} className="mobile-footer-logo" >
              <Image alt="footer" filename="logofooter.png" />
            </div>

            <h6 className="text-muted pt-2 pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              sapiente ducimus rem quasi animi asperiores architecto deserunt
              suscipit deleniti sit molestiae in
            </h6>
            <span
              className="mb-5 span-icon"
              style={{
                fontSize: "17px",
                width: "25%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a className="text-white" href="https://facebook.com">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a className="text-white" href="https://facebook.com">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a className="text-white" href="https://facebook.com">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a className="text-white" href="https://facebook.com">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </span>
          </div>

          <div class="col-md-4 mb-md-0 mb-3">
            <h5 className="font-weight-bold">Links support</h5>

            <hr
              align="left"
              style={{ width: "44px", }}
              className="line mobile-footer-text"
            />

            <ul class="list-unstyled">
              <li>
                <h6 className="text-muted">{">"} Download panduan</h6>
              </li>
              <li>
                <h6 className="text-muted">{">"} FAQ</h6>
              </li>
              <li>
                <h6 className="text-muted">{">"} cara pembayaran</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
