import React from "react"
import Footer from "../footer"

import "./style.css"
const Pricing = () => {
  return (
    <>
      <div className="pricing1 py-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center card-shadow on-hover border-0 mb-4">
                <div className="card-body font-14">
                  <h5 className="mt-3 mb-1 font-weight-medium">BASIC</h5>
                  <h6 className="subtitle font-weight-normal">
                    untuk website portofolio dan lain lain
                  </h6>
                  <div className="pricing my-3">
                    <sup>Rp. </sup>
                    <span className="monthly display-5">700K</span>
                    <small className="monthly"> /tahun</small>
                    <div
                      style={{
                        width: "100%",
                        padding: "5px 0",
                        backgroundColor: "#DAEEFF",
                        left: 0,
                      }}
                      className="position-absolute"
                    >
                      <span className=" d-block py-2">
                        Perpanjangan{" "}
                        <span className="font-weight-bolder">Rp.500K</span>{" "}
                        pertahun
                      </span>
                    </div>
                  </div>
                  <ul className="list-inline mt-5 pt-4">
                    <li className="d-block py-2">
                      Kapasitas Penyimpanan <strong>750 MB</strong>{" "}
                    </li>
                    <li className="d-block py-2">Jasa Upload Web Content </li>
                    <li className="d-block py-2">Bandwidth Unlimited</li>
                    <li className="d-block py-2">Unlimited Akun email </li>

                    <li className="d-block py-2">&nbsp;</li>
                    <li className="d-block py-2">&nbsp;</li>
                  </ul>
                  <div className="bottom-btn">
                    <a
                      className="btn btn-success-gradiant btn-md text-white btn-block"
                      href="/"
                    >
                      <span>Choose Plan</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card text-center card-shadow on-hover border-0 mb-4">
                <div className="card-body font-14">
                  <span className="font-weight-bold text-white badge badge-warning p-2 position-absolute price-badge font-weight-normal">
                    Popular
                  </span>
                  <h5 className="mt-3 mb-1 font-weight-medium">INTERMEDIATE</h5>
                  <h6 className="subtitle font-weight-normal">
                    untuk website blog dan lain lain
                  </h6>
                  <div className="pricing my-3">
                    <sup>Rp. </sup>
                    <span className="monthly display-5">700K</span>
                    <small className="monthly"> /tahun</small>
                    <div
                      style={{
                        width: "100%",
                        padding: "5px 0",
                        backgroundColor: "#DAEEFF",
                        left: 0,
                      }}
                      className="position-absolute"
                    >
                      <span className=" d-block py-2">
                        Perpanjangan{" "}
                        <span className="font-weight-bolder">Rp.500K</span>{" "}
                        pertahun
                      </span>
                    </div>
                  </div>
                  <ul className="list-inline mt-5 pt-4">
                    <li className="d-block py-2">
                      Kapasitas Penyimpanan <strong>750 MB</strong>{" "}
                    </li>
                    <li className="d-block py-2">Jasa Upload Web Content </li>
                    <li className="d-block py-2">Bandwidth Unlimited</li>
                    <li className="d-block py-2">Unlimited Akun email </li>

                    <li className="d-block py-2">&nbsp;</li>
                    <li className="d-block py-2">&nbsp;</li>
                  </ul>
                  <div className="bottom-btn">
                    <a
                      className="btn btn-success-gradiant btn-md text-white btn-block"
                      href="/"
                    >
                      <span>Choose Plan</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card text-center card-shadow on-hover border-0 mb-4">
                <div className="card-body font-14">
                  <h5 className="mt-3 mb-1 font-weight-medium">SUPREME</h5>
                  <h6 className="subtitle font-weight-normal">
                    untuk website toko online dan lain lain
                  </h6>
                  <div className="pricing my-3">
                    <sup>Rp. </sup>
                    <span className="monthly display-5">700K</span>
                    <small className="monthly"> /tahun</small>
                    <div
                      style={{
                        width: "100%",
                        padding: "5px 0",
                        backgroundColor: "#DAEEFF",
                        left: 0,
                      }}
                      className="position-absolute"
                    >
                      <span className=" d-block py-2">
                        Perpanjangan{" "}
                        <span className="font-weight-bolder">Rp.500K</span>{" "}
                        pertahun
                      </span>
                    </div>
                  </div>
                  <ul className="list-inline mt-5 pt-4">
                    <li className="d-block py-2">
                      Kapasitas Penyimpanan <strong>750 MB</strong>{" "}
                    </li>
                    <li className="d-block py-2">Jasa Upload Web Content </li>
                    <li className="d-block py-2">Bandwidth Unlimited</li>
                    <li className="d-block py-2">Unlimited Akun email </li>

                    <li className="d-block py-2">&nbsp;</li>
                    <li className="d-block py-2">&nbsp;</li>
                  </ul>
                  <div className="bottom-btn">
                    <a
                      className="btn btn-success-gradiant btn-md text-white btn-block"
                      href="/"
                    >
                      <span>Choose Plan</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  <span className="font-weight-bold text-white badge badge-warning p-2 position-absolute price-badge font-weight-normal">
                  Popular
                </span> */}
      </div>
      <Footer />
    </>
  )
}

export default Pricing
