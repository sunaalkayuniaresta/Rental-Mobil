import React from 'react'

// class Bebas extends React.Component{
    
//     // state = {
//     //     value:'',
//     //     email:'',
//     //     password:''
//     // }
//     // getValue = (event)=>{
//     //             const name = event.target.name;
//     //             value = event.target.value;
//     //             this.setState({[name]:value})
//     // }

//     // handleSubmit = (event)=>{
//     //     event.preventDefault();
//     //     const email =this.state.email
//     //     const password =this.state.password
//     //     console.log(email);
//     //     console.log(password);
//     // };

//     // render(){
//     //     return(
//     //         // <div>
//     //         //     <input type="text" className="form-control py-3" placeholder="Email" onChange={this.getValue} aria-label="Username" aria-describedby="basic-addon1" name='email' />
//     //         //     <input type="password" className="form-control py-3" placeholder="Pasword" onChange={this.getValue} aria-label="Username" aria-describedby="basic-addon1"  name='password' />
//     //         //     <button onClick={this.handleSubmit} className="btn my-2 btn-c text-white p-2 " id="carimobil">Cari Mobil</button>
//     //         // </div>
//     //         <form>
//     //             <input type="text" className="form-control py-3" placeholder="Email" onChange={this.getValue} aria-label="Username" aria-describedby="basic-addon1" name='email' />
//     //             <input type="password" className="form-control py-3" placeholder="Pasword" onChange={this.getValue} aria-label="Username" aria-describedby="basic-addon1"  name='password' />
//     //             <button onClick={this.handleSubmit} className="btn my-2 btn-c text-white p-2 " id="carimobil">Cari Mobil</button>
//     //         </form>
//     //     )
//     // }
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: '',
//           email:''
//         };
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }
    
//       handleSubmit(event) {
//         // alert('An essay was submitted: ' + this.state.value);
//         // event.preventDefault();
//         console.log(value);
//         console.log(email);
//       }
    
//       render() {
//         return (
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Essay:
//               <textarea value={this.state.value} onChange={this.handleChange} />
//             </label>
//           </form>
//         );
//       }
// }
class Bebas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nama:'',email: '',password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value=event.target.value;
    const name=event.target.name;
    this.setState({[name]:value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.nama);
  }

  render() {
    return (
      <form>
        <label>
          Gaskan
          <input type="text" name='nama' value={this.state.nama} onChange={this.handleChange} />
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit} className='btn btn-primary' type="submit" value="Submit" >Gas</button>
      </form>
    );
  }
}
export default Bebas