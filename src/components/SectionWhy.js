import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../responsive.css"

export default function SectionWhy() {
    return (
        <div>
            <div className="section-why mb-4" id="why">
            <div className="container">
                <h4 className="fw-bold text-center" >Why Us?</h4>
                <p className="text-center" >
                Mengapa harus pilih Binar Car Rental?
                </p>
                <div className="row py-4">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 col">
                    <div className="card">
                    <div className="card-body">
                        <div className="mobil rounded-circle">
                        <i className="fa-regular fa-thumbs-up p-2"></i>
                        </div>
                        <h5 className="card-title">Mobil Lengkap</h5>
                        <p className="card-text">
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                        terawat
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12  col ">
                    <div className="card" >
                    <div className="card-body">
                        <div
                        className="murah rounded-circle"
                        style={{background:"#fa2c5a"}}
                        >
                        <i className="fa-solid fa-tag text-white p-2"></i>
                        </div>
                        <h5 className="card-title">Harga Murah</h5>
                        <p className="card-text">
                        Harga murah dan bersaing, bisa bandingkan harga kami dengan
                        rental mobil lain
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12  col">
                    <div className="card" >
                    <div className="card-body">
                        <div className="jam rounded-circle">
                        <i className="fa-regular fa-clock text-white p-2"></i>
                        </div>
                        <h5 className="card-title">Layanan 24 Jam</h5>
                        <p className="card-text">
                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                        tersedia di akhir minggu
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 col">
                    <div className="card" >
                    <div className="card-body">
                        <div className="supir rounded-circle">
                        <i className="fa-solid fa-trophy text-white p-2"></i>
                        </div>
                        <h5 className="card-title">Sopir Profesional</h5>
                        <p className="card-text">
                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                        tepat waktu.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
