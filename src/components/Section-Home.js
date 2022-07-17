import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import mobil from "../../src/images/img_car.png"
import "../style.css"
import "../responsive.css"
import { Link } from "react-router-dom";


export default function SectionHome() {
    return (
      <div>
        <div className="section-home pt-4">
          <div className="containers pt-4">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
              <div className="col-lg-6 col-md-12 col-sm-12 px-5 align-self-center">
                <h4 className="fw-bold mb-4 mt-4 px-4" style={{fontSize:"27px"}}>
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h4>
                <p className="px-4">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <div className="tombol px-4">
                  <Link to="/carimobil" className="btn btn-c text-white pt-2 mt-2">
                    <h6>Mulai Sewa Mobil</h6>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-md-2 mt-4 align-self-center">
                <div className="container-fluid">
                  <div className="warna justify-content-sm-end justify-content-lg-end justify-content-md-end" style={{textAlign:"right"}}>
                    <img src={mobil} className="gambar" alt="" width="570" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
