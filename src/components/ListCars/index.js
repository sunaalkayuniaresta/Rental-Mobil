import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/carsAction";
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../../styleCariMobil.css'
// import '../../styleHasil.css'

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
// class Binar {
//     static populateCars = (cars) => {
//       return cars.map((car) => {
//         const isPositive = getRandomInt(0, 1) === 1;
//         const timeAt = new Date();
//         const mutator = getRandomInt(1000000, 100000000);
//         const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
  
//         return {
//           ...car,
//           availableAt,
//         };
//       })
//     }
  
//     static async listCars(filterer) {
//       let cars;
//       let cachedCarsString = localStorage.getItem("CARS");
  
//       if (!!cachedCarsString) {
//         const cacheCars = JSON.parse(cachedCarsString);
//         cars = this.populateCars(cacheCars);
//       } else {
//         const response = await fetch(
//           "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
//         );
//         const body = await response.json();
//         cars = this.populateCars(body)
  
//         localStorage.setItem("CARS", JSON.stringify(cars));
//       }
  
//       if (filterer instanceof Function) return cars.filter(filterer);
  
//       return cars;
//     }
// }
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
function bagus(coba) {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    coba = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    return coba
}

function ListCars({submit,data,jumlahpenumpang,tipedriver,tanggal,waktu}) {
    const { listCarsResult,listCarsLoading,listCarsError } = useSelector((state) => state.carReducer);
    const dispatch = useDispatch();
    const jumlah=jumlahpenumpang
    let d = (tanggal + "T" + waktu);
    console.log(d);
    let formdate = Date.parse(d);
    // console.log(tanggal);
    // console.log(waktu);
    // console.log(formdate);
    console.log(Date.parse(tanggal));
    console.log(typeof(formdate));
    // console.log(tanggal.slice(0,4));
    // let list=[]
    // for(let i=1;i<=25;i++){
    //     list.push(i)
    // }
    // list[1]=45
    // {listCarsResult ?} cars.map((car) => {
    //     const isPositive = getRandomInt(0, 1) === 1;
    //     const timeAt = new Date();
    //     const mutator = getRandomInt(1000000, 100000000);
    //     const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

    //     return {
    //         ...car,
    //         availableAt,
    //     };
    // })
    // }

    useEffect(()=>{
        // get action list cars
        console.log("1. use effect component did mount")
        dispatch(getListCars());
    }, [dispatch])


    return (
        <div className="container-fluid hasil">
            <div className="row px-5">
            <h3 className="text-center mt-1 mb-4">List Cars</h3>
            {listCarsResult ? (
                listCarsResult.filter((car)=>((car.capacity >= jumlah) && ((Date.parse((bagus(car.availableAt))) > formdate))) ).map((car) => {
                    let id = car.id
                    return (
                        // <div className="text-center">
                        //     <img src={car.image} alt={car.plate}  style/={{width: "300px"}} />
                        //     <p key={car.id}>{car.manufacture} - {car.type}</p>
                        // </div>
                            <div className="card mb-4 col-lg-6 col-sm-12 p-3 " style={{marginRight:'auto',marginLeft:'auto',width:'48%'}} >
                                <img height={"300px"} width={"99%"}  src={car.image} alt={car.manufacture} />
                                {/* bagus(car.availableAt) */}
                                <h5 className="my-3">  Rp {car.rentPerDay} /hari</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolore doloribus quaerat sequi expedita iste vel, odit quasi harum voluptates, saepe praesentium consectetur soluta similique excepturi. Saepe rem odit veritatis!</p>

                                <h6 >Kapasitas Penumpang <b>{car.capacity} orang</b></h6>
                                <p>Plate: <b>{car.plate}</b></p>
                                <p>Manufacture: <b>{car.manufacture}</b></p>
                                {/* <p>Model: <b>{car.model}</b></p> */}
                                {/* <p>Available at: <b>{car.availableAt}</b></p> */}
                                {/* <p>{(car.availableAt)}</p> */}
                                {/* <p>{car.plate}</p> */}
                                <button className="btn btn-c text-white p-2 " data-bs-target='#gas'
                                data-bs-toggle="modal">Pilih Mobil</button>
                                {/* <button class="btn btn-c text-white p-2 " data-bs-target=#${this.plate}
                                data-bs-toggle="modal">Pilih Mobil</button> */}
                                {/* <h1>{list[car.capacity]}</h1> */}
                                <div
                                    className="modal fade"
                                    id='gas'
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                    >
                                    <div className="modal-dialog">
                                        <div className="modal-content bg-light">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Konfirmasi</h5>
                                            <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="#">
                                            {/* <img src={car.image} style={{width:'100%'}} alt={car.manufacture} /> */}
                                            {/* <h5 className="my-3">Harga  Rp {car.rentPerDay} /hari</h5> */}
                                            <div className="form-group">
                                                <label for="">Nama Anda</label><br />
                                                <input placeholder="Nama Sesuai KTP" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label for="">Email Anda</label><br />
                                                <input placeholder="Email Aktif Anda" type="email" className="form-control" />
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <button type="button" className="btn btn-success form-control">
                                                Sewa Sekarang
                                                </button>
                                            </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                            >
                                            Batal
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            
                    )
                })
            ) : listCarsLoading ? (
                <p>Loading . . . </p>
            ) : (
                <p>{listCarsError ? listCarsError : "Data Kosong"}</p>
            )
        }
        </div>
        </div>
    );
}

export default ListCars;
