import React from "react"
import Navbar from "../../components/navbar"
import Pricing from "../../components/pricing"
const Paketharga = () => (
  <>
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
