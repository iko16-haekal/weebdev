import React from "react"
import Navbar from "../../components/navbar"
import Pricing from "../../components/pricing"
import SEO from "../../components/seo"
const Paketharga = () => (
  <>
    <SEO
      title="paket harga"
      keywords="paket harga toko online murah, paket harga website murah, paket harga buat website murah, paket harga buat toko online murah"
      description="weebdev memberikan beberapa pilihan paket harga untuk membuat website ataupun toko online yang murah sesuai dengan kebutuhan bisnis Anda"
    />
    <Navbar />
    <div className="container mt-5 pt-5 mb-3">
      <h2 style={{ fontSize: "2rem" }} className="text-center font-weight-bold">
        Paket Harga Jasa pembuatan Website
      </h2>
      <p style={{ fontSize: "1rem" }} className="text-center pt-4 text-muted">
        Nikmati layanan untuk membuat website dan toko online murah di weebdev{" "}
        <br /> dengan masa berlangganan minimal satu tahun.
      </p>
    </div>

    <Pricing />
  </>
)

export default Paketharga
