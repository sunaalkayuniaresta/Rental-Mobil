import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../responsive.css"
import check from "../../src/images/fi_check.png"
import wajah from "../../src/images/img_service.png"

export default function SectionService() {
    return (
        <div>
            <div className="section-service py-3" id="service">
            <div
                className="container py-5 px-5"
                // data-aos="fade-up"
                // data-aos-duration="3000"
            >
                <div className="row p-3">
                <div className="col-lg-6 col-md-12 col-sm-12 my-5 text-center justify-content-center align-content-center px-4">
                    <img src={wajah} className="gambar" alt="" width="auto" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                    <h4 className="fw-bold">
                    Best Car Rental for any kind of trip in (Lokasimu)!
                    </h4>
                    <p>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                    lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                    kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                    wedding, meeting, dll.
                    </p>
                    <p>
                    <img src={check} alt="" style={{marginRight:"10px"}} className="ck mr-4 rounded-circle" />
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                    </p>
                    <p>
                    <img src={check} alt="" style={{marginRight:"10px"}} className="ck mr-4 rounded-circle" />
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </p>
                    <p>
                    <img src={check} style={{marginRight:"10px"}} alt="" className="ck mr-4 rounded-circle" />
                    Sewa Mobil Jangka Panjang Bulanan
                    </p>
                    <p>
                    <img src={check} style={{marginRight:"10px"}} alt="" className="ck mr-4 rounded-circle" />
                    Gratis Antar - Jemput Mobil di Bandara
                    </p>
                    <p>
                    <img src={check} style={{marginRight:"10px"}} alt="" className="ck mr-4 rounded-circle" />
                    Layanan Airport Transfer / Drop In Ou
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
