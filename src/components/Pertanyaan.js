import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../responsive.css"

export default function Pertanyaan() {
    return (
        <div>
            <div className="pertanyaan my-3" id="pertanyaan" data-aos="fade-up">
                <div className="container py-4">
                    <div className="row py-4">
                    <div className="col-lg-6">
                        <h4 className="fw-bold">Mau Nanya Apa Kau??</h4>
                        <form>
                        <div className="mb-3">
                            <label for="exampleInputNama" className="form-label">Nama Anda</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPertanyaan" className="form-label">Pertanyaan</label><br/>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Tanya</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                Apa saja syarat yang dibutuhkan?
                            </button>
                            </h2>
                            <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                            >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est cum eius voluptatibus. Quis accusantium expedita
                                similique tempore earum delectus nihil sunt, maxime
                                dignissimos quia magnam consequuntur repellat quisquam,
                                molestiae soluta.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                Berapa hari minimal sewa mobil lepas kunci?
                            </button>
                            </h2>
                            <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                            >
                            <div className="accordion-body">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime voluptas, eligendi molestiae placeat libero dolore,
                                fugit perspiciatis doloribus quae reprehenderit vero
                                consectetur eos, expedita voluptatem non aliquid ipsum
                                harum. Necessitatibus!
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </button>
                            </h2>
                            <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                            >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Modi, necessitatibus officia enim voluptates dicta incidunt
                                eveniet, deserunt facere qui quasi cupiditate! Ipsum illum
                                non quis beatae voluptas et sapiente rem!
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                            >
                                Apakah Ada biaya antar-jemput?
                            </button>
                            </h2>
                            <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample"
                            >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nulla natus, est ex qui enim eveniet, dignissimos soluta
                                voluptates obcaecati repudiandae vel repellendus illum
                                debitis libero architecto iure delectus vitae illo!
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                            >
                                Bagaimana jika terjadi kecelakaan
                            </button>
                            </h2>
                            <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample"
                            >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Minima dolor eveniet corporis beatae repudiandae voluptatem
                                distinctio? Quasi temporibus officiis consequuntur quisquam,
                                quam saepe consectetur iure, ipsa error vitae, laborum
                                nulla.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
