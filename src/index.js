import React from 'react';
// import './index.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CariMobil from "./CariMobil"
import Bebas from './components/Bebas';
import Bebas1 from './components/Bebas1';
import Semogabisa from './components/Semogabisa';
import Tanggal from './components/Tanggal';
import { Protected } from './components';
import { ListCars } from './components';
import { LandingPage } from './components';
import { Login } from './components';
import Home from './Home';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <BrowserRouter>
  //   {/* <Provider store={store}>
  //       <CariMobil/>
  //   </Provider> */}
  //     <Routes>
  //       <Route path="/home" element={<App />} />
  //       <Route path='carimobil' element={<Provider store={store}><CariMobil/></Provider>}></Route>
  //       <Route path="tes" element={<Bebas1/>} />
  //       <Route path="gas" element={<Tanggal/>} />
  //     </Routes>
  // </BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="carimobil" 
            element={
              <Protected>
                <CariMobil />
              </Protected>
            } 
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
