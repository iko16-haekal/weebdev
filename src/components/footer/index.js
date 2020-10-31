import React from "react"
import Image from "../image"
import "./style.css";
function Footer() {
  return (
    <footer
      className="page-footer font-small text-white pt-4 pb-5"
      style={{ backgroundColor: "black" }}
    >
      <div className="container text-center text-md-left">
        <div className="row justify-content-center">
          

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-4 mb-md-0 mb-3">
            <div style={{ maxWidth: "200px", }} className="mobile-footer-logo" >
              <Image alt="footer" filename="logofooter.png" />
            </div>

            <h6 className="text-muted pt-2 pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              sapiente ducimus rem quasi animi asperiores architecto deserunt
              suscipit deleniti sit molestiae in
            </h6>
          </div>

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="font-weight-bold">Links support</h5>

            <hr
              align="left"
              style={{ width: "44px", }}
              className="line mobile-footer-text"
            />

            <ul className="list-unstyled">
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

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="font-weight-bold">Contact</h5>

            <hr
              align="left"
              style={{ width: "44px", }}
              className="line mobile-footer-text"
            />

            <ul className="list-unstyled">
              <li>
                <h6>
                  <a className="text-secondary" href="https://facebook.com">
                     <i className="fa fa-whatsapp" aria-hidden="true"></i> 085715904647
                  </a>
                </h6>
              </li>
              <li>
              <h6>
                  <a className="text-secondary" href="https://facebook.com">
                     <i className="fa fa-instagram" aria-hidden="true"></i>  _weebdev
                  </a>
                </h6>
              </li>
              <li>
              <h6>
                  <a className="text-secondary" href="https://facebook.com">
                     <i className="fa fa-facebook" aria-hidden="true"></i> weebdev
                  </a>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
