import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../responsive.css"
import gambar1 from "../../src/images/1.svg"
import gambar2 from "../../src/images/2.svg"
// import gambar3 from "../../src/images/3.svg"

export default function Testimonial() {
    return (
        <div>
            <div className="section-testi my-4" id="testi">
            <div className="container py-4" >
                <h4 className="text-center fw-bold">Testimonials</h4>
                <p className="text-center">
                Berbagai review positif dari para pelanggan kami
                </p>
                <div className="col-lg-8 offset-lg-2">
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                        <div className="card-body d-lg-flex">
                            <img src={gambar1} className="card-img-top" height="200" />
                            <div className="card-body align-self-center">
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <p className="card-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Soluta hic dicta voluptas, itaque, nulla, maxime
                                ab a molestias laboriosam aliquid alias eaque quos.
                                Similique ab nostrum quisquam laboriosam alias nesciunt?
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                        <div className="card-body d-lg-flex">
                            <img
                            src={gambar2}
                            className="card-img-top"
                            alt="..."
                            height="200"
                            />
                            <div className="card-body align-self-center">
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star" style={{color:"#f9cc00"}}></i>
                            <i className="far fa-star" style={{color:"#f9cc00"}}></i>
                            <p className="card-text align-self-center">
                                Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Nulla unde earum, minima harum perferendis est
                                necessitatibus eaque id explicabo dolore in ullam,
                                maiores nesciunt eveniet adipisci! At quo nesciunt
                                atque?.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                        <div className="card-body d-lg-flex">
                            <img
                            src={gambar2}
                            className="card-img-top"
                            alt="..."
                            height="200"
                            />
                            <div className="card-body align-self-center">
                            <i className="fa-solid fa-star"    style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star"    style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star"    style={{color:"#f9cc00"}}></i>
                            <i className="fa-solid fa-star"    style={{color:"#f9cc00"}}></i>
                            <i
                                className="fa-solid fa-star-half-alt"
                                style={{color:"#f9cc00"}}
                            ></i>
                            <p className="card-text align-self-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Atque ut deserunt et harum nam molestias sed id tempora
                                aut repellendus impedit est expedita eos, temporibus
                                perspiciatis sit suscipit, quae maxime!
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                    >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                    >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
