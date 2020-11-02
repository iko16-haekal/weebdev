import React from "react"
import Footer from "../../components/footer"
import Image from "../../components/image"
import Navbar from "../../components/navbar"
import SEO from "../../components/seo"
import "./style.css"
const Tema = () => {
  return (
    <>
      <Navbar />
      {/* <div className="container-fluid jmb mb-3">
        <div className="bg">
          <div className="container mt-5 pt-3">
            <h1 className="text-white text-header font-weight-bold">TEMA</h1>
            <p className="text-white text-paragraf">
              pilih temanya dan jalankan website anda
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="container-fluid mt-5 pt-4">
                  <div className="row">
                    <div className="col-4">
                      <span
                        className="text-center m-auto"
                        style={{ color: "#1B9ED9", fontSize: "2rem" }}
                      >
                        <i class="fa fa-universal-access"></i>
                      </span>
                      <h6 fon>mudah digunakan</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-tema">
                  <Image alt="tema" filename="tema.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <SEO
        title="paket harga"
        keywords="paket harga toko online murah, paket harga website murah, paket harga buat website murah, paket harga buat toko online murah"
        description="weebdev memberikan beberapa pilihan paket harga untuk membuat website ataupun toko online yang murah sesuai dengan kebutuhan bisnis Anda"
      />

      <div className="container mt-5 pt-1 pb-5 mb-5">
        <div className="mb-5">
          <h2
            style={{ fontSize: "2rem" }}
            className="text-center font-weight-bold"
          >
            Tema Wordpress
          </h2>
          <p
            style={{ fontSize: "1rem" }}
            className="text-center pt-4 text-muted"
          >
            Weebdev menyediakan platform yang yang responsive dan mudah
            digunakan, pilih Tema Website <br /> sesuai kebutuhan bisnis Anda,
            dijamin puas
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Image alt="toko" filename="toko.jpg" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Image alt="klinik" filename="klinik.jpg" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Image alt="toko" filename="kuliner.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Tema
