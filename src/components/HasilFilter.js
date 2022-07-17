import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListCars } from '../components';

export default function HasilFilter() {
    return (
        <div>
            <div className="Hasil ">
                <div className="containers ">
                    <ListCars/>
                </div>
            </div>
        </div>
    )
}
