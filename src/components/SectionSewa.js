import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../responsive.css"
import { Link } from "react-router-dom";

export default function SectionSewa() {
    return (
        <div>
            <div className="section-sewa my-5">
            <div
                className="container text-center p-4 text-white"
            >
                <h3 className="fw-bold mx-3 mt-4">Sewa Mobil di (Lokasimu) Sekarang</h3>
                <br />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                temporibus quas vero, aut vitae debitis, iure sequi aliquam modi nam,
                eveniet repellat similique quam cupiditate neque quae consectetur eos
                est.
                </p>
                <Link to={"/carimobil"} className="btn btn-c text-white mb-3 mt-3">Mulai Sewa Mobil</Link>
            </div>
            </div>
        </div>
    )
}
