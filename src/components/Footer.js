import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../responsive.css"

export default function Footer() {
    return (
        <div>
            <footer className="mt-5 bg-dark">
            <div className="container text-white py-5">
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col">
                    <a href="#">Our Service</a>
                    <a href="#">Why Us</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col">
                    <p>Connect With Us</p>
                    <i className="fa-brands fa-facebook-f mx-2 my-1"></i>
                    <i className="fa-brands fa-instagram mx-2 my-1"></i>
                    <i className="fa-brands fa-twitter mx-2 my-1"></i>
                    <i className="fa-regular fa-envelope mx-2 my-1"></i>
                    <i className="fa-brands fa-twitch mx-2 my-1"></i>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col">
                    <p>Copyright Binar 2022</p>
                    <p className="footer">fsjdfksjfbkb</p>
                </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
