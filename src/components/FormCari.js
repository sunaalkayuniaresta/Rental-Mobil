import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from '@mui/material';
import ListCars from './ListCars';

function refreshPage() {
  window.location.reload();
}

class FormCari extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tipedriver:'',jumlahpenumpang:'',tanggal:'',waktu:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Hapus = this.Hapus.bind(this);
    this.data = this.data.bind(this)
  }

  handleChange(event) {
    const value = event.target.value;
    const name  = event.target.name;
    this.setState({[name]:value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
    console.log(this.state.tipedriver);
    console.log(this.state.jumlahpenumpang);
    console.log(this.state.tanggal);
    console.log(this.state.waktu);
    const jumlahpenumpang = this.state.jumlahpenumpang;
    
  }
  Hapus(){
    return 2
  }


  data(event){
    event.preventDefault();
    const jumlahpenumpang = this.state.jumlahpenumpang
    console.log(jumlahpenumpang);
    const data1=[this.state.jumlahpenumpang,this.state.tipedriver,this.state.tanggal,this.state.waktu]
    return data1
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="cariMobil mt-6 py-4">
          <div className="container-fluid" style={{width:"96%",background:"#ffff",boxShadow:"2px 1px 10px 1px rgba(0, 0, 0, 0.15)",borderRadius:"18px"}}>
          <div className="row px-3 py-4 ">
        {/* <label>
          Gaskan
          <input type="text" name='nama' value={this.state.nama} onChange={this.handleChange} />
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit} className='btn btn-primary' type="submit" value="Submit" >Gas</button> */}
        {/* <div className="row px-3 py-4 "> */}
                
                        <div className="col mx-1">
                            <label for="form_driver" className="form-label">Tipe Driver</label>
                            <select className="form-select py-3" id="inputGroupSelect01" value={this.state.value} onChange={this.handleChange} name='tipedriver' >
                                <option selected>Pilih Driver</option>
                                <option value="Dengan Supir">Dengan Supir</option>
                                <option value="Lepas Kunci">Lepas Kunci</option>
                            </select>
                        </div>
                        <div className="col mx-1">
                            <label for="form_pass" className="form-label">Jumlah Penumpang </label>
                            <input type="number"  name='jumlahpenumpang' value={this.state.jumlahpenumpang} onChange={this.handleChange}className="form-control py-3" placeholder="Jumlah Penumpang" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        {/* <div className="col mx-1">
                          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                        </div> */}
                        <div className="col mx-1 " style={{marginTop:"1px"}}>
                                {/* <Tanggal/> */}
                                <label for="form_date" className="form-label">Tanggal</label>
                                <input type="date" name='tanggal' value={this.state.tanggal} onChange={this.handleChange} className="form-control py-3" id="tanggal" placeholder="Pilih Tanggal"></input>
                        </div>
                        <div className="col mx-1" style={{marginTop:"1px"}}>
                                {/* <Waktu/> */}
                                <label for="form_time" className="form-label">Waktu Jemput</label>
                                <input type="time" name='waktu' value={this.state.waktu} onChange={this.handleChange} className="form-control py-3" id="waktu" placeholder="Pilih Waktu" ></input>
                        </div>
                        <div className="col mt-4 ">
                            <button className="btn my-2 btn-c text-white p-2 " id="carimobil" name='submit' value="submit">Cari Mobil</button>
                            <button onClick= {refreshPage} className="btn mx-1 btn-danger text-white p-2 " id="clear-btn">Reset</button>
                        </div>
      </div>
      </div>
    </form>
    <ListCars submit={this.handleSubmit} data={this.data} jumlahpenumpang={this.state.jumlahpenumpang} tipedriver={this.state.tipedriver} tanggal={this.state.tanggal} waktu={this.state.waktu}/>
    {/* <Semogabisa jumlahpenumpang={this.state.jumlahpenumpang} tipedriver={this.state.tipedriver}/> */}
    </div>
    );
  }
}
export default FormCari