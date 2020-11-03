import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import "./style.css"
import Card from "../components/card"
import Caraousel from "../components/caraousel"
import Footer from "../components/footer"
const IndexPage = () => (
  <>
    <SEO
      title="Jasa Pembuatan Website murah hanya di weebdev"
      description="Jasa pembuatan website untuk profil perusahaan, personal blog,
       toko online, dan UKM. tinggal Pesan, bayar, langsung proses dan pastinya Murah."
      keywords="jasa,weebdev,website murah,jasa desain murah,jasa pembuatan website murah berkualitas"
    />

    <Navbar />
    <div className="container-fluid home-jmb">
      <div className="container ">
        <div className="row jmb-row">
          <div className="col-md-6 col-jmb-text">
            <h2
              style={{
                fontSize: "48px",
                fontFamily: "calibri",
              }}
              className="text-white text-jmb font-weight-regular pt-4"
            >
              Jasa Pembuatan Website Dengan Harga Murah & Mudah Digunakan
            </h2>
            <Link className="btn btn-warning btn-started text-center text-white mt-3 font-weight-bold mobile-hide tablet-hide ">
              Get started
            </Link>
          </div>

          <div className="col-md-6 col-jmb-img">
            <div className="mt-5">
              <Image
                filename="header.1.png"
                alt="image jasa pembuatan website murah"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mb-5 ">
      <h2 className="text-center mobile-text-h3">Why choosing us</h2>

      <hr className="text-center line" />

      <div
        className="row pt-4 row-sec2"
        data-sal="fade"
        data-sal-duration="1500"
      >
        <div className="col-md-6">
          <div className="col-section-img">
            <Image
              filename="header.2.png"
              alt="jasa web desain professional"
              className=""
            />
          </div>
        </div>
        <div className="col-md-6  mt-5">
          <h2
            style={{ fontSize: "2rem" }}
            className="mobile-text-h3 text-right mobile-text-center"
          >
            desain web
            <span className="font-weight-bold"> menarik dan unik</span>
          </h2>
          <p className="font-weight-light mobile-text-p text-right mobile-text-center">
            kami melayani pembuatan website dengan desain modern, minimalis ,
            dan unik, kami menyediakan berbagai tema untuk membangun website
            anda
          </p>
          <Link className="btn btn-primary btn-started float-right mobile-hide">
            Coba sekarang
          </Link>
        </div>
        <div className="container-fluid">
          <div className="row col-service-2">
            <div className="col-md-6 mt-5">
              <h2
                style={{ fontSize: "2rem" }}
                className="mobile-text-h3 mobile-text-center"
              >
                harga yang
                <span className="font-weight-bold"> hemat dan bersahabat</span>
              </h2>
              <p className="font-weight-light mobile-text-p mobile-text-center">
                Tidak seperti produk lain yang sulit digunakan & mahal.
                weebdev.com menyediakan solusi website yang mudah & murah untuk
                Anda.
              </p>
              <Link className="btn btn-primary btn-started mobile-hide">
                Coba sekarang
              </Link>
            </div>
            <div className="col-md-6 mt-3">
              <div className="ml-auto col-section-img-2">
                <Image
                  filename="header.3.png"
                  alt="jasa web desain professional dan murah"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className="container-fluid mt-5 mb-4 pb-5 pt-4"
      style={{ backgroundColor: "#1B9ED9", minHeight: "100%" }}
    >
      <div className="container">
        <h2 className="text-center text-white pb-4 mobile-text-h3">
          Fitur Website
        </h2>

        <div className="row mt-5 m-auto">
          <div className="col-md-4">
            <div className="mb-4">
              <Card
                icon="fa fa-mobile"
                title="Mobile friendly"
                description="bagi anda yang ingin memiliki website yang bisa diakses diberbagai device seperti smarthphone, laptop , tablet"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <Card
                icon="fa fa-shield "
                title="Security ssl"
                description="Buat website di weebdev untuk meningkatkan keamanan website anda dari dari serangan hacker"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <Card
                icon="fa fa-credit-card-alt "
                title="Payment gateaway"
                description="weebdev menyediakan fasilitas sistem pembayaran melalui bank hingga kartu kerdit untuk bertransaksi online"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container pb-5">
      <h1 className="text-center mobile-text-h3">Testimonial</h1>
      <hr className="line text-center" />
      <div className="row">
        <div className="col">
          <Caraousel />
        </div>
      </div>
    </div>

    <Footer />
  </>
)

export default IndexPage
