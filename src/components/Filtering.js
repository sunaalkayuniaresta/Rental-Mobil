import React from 'react'
import Tanggal from './Tanggal'
import Waktu from './Waktu'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Margin } from '@mui/icons-material';
import FormCari from './FormCari';
// import "../style.css"
// import "../responsive.css"
// import "../styleCariMobil.css"




export default function Filtering() {

    return (
        <div>
            {/* <div className="cariMobil mt-6 py-4">
                <div className="container" style={{width:"90%",background:"#ffff",boxShadow:"2px 1px 10px 1px rgba(0, 0, 0, 0.15)",borderRadius:"18px"}}>
                    <div className="row px-3 py-4 ">
                        <div className="col mx-2">
                            <label for="form_driver" className="form-label">Tipe Driver</label>
                            <select className="form-select py-3" id="inputGroupSelect01">
                                <option selected>Pilih Driver</option>
                                <option value="Supir">Dengan Supir</option>
                                <option value="Lepas Kunci">Lepas Kunci</option>
                            </select>
                        </div>
                        <div className="col mx-2">
                            <label for="form_pass" className="form-label">Jumlah Penumpang </label>
                            <input type="number" className="form-control py-3" placeholder="Jumlah Penumpang" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col mx-2 " style={{marginTop:"30px"}}>
                                <Tanggal/>
                        </div>
                        <div className="col mx-2" style={{marginTop:"30px"}}>
                                <Waktu/>
                        </div>
                        <div className="col mt-4 ">
                            <button className="btn my-2 btn-c text-white p-2 " id="carimobil">Cari Mobil</button>
                            <button className="btn mx-1 btn-danger text-white p-2 " id="clear-btn">Reset</button>
                        </div>
                    </div>
                    <FormCari/>
                </div>
            </div> */}
            <FormCari/>
        </div>
    )
}
