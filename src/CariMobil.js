// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Bebas from './components/Bebas';
import Filtering from './components/Filtering';
import Footer from './components/Footer';
import HasilFilter from './components/HasilFilter';
import Navigasi from './components/Navigasi';
import Pertanyaan from './components/Pertanyaan';
import SectionHome from './components/Section-Home';
import SectionHomecarimobil from './components/SectionHomecarimobil';
import SectionService from './components/SectionService';
import SectionSewa from './components/SectionSewa';
import SectionWhy from './components/SectionWhy';
import Testimonial from './components/Testimonial';


function CariMobil() {
    return (
        <div className="CariMobil">
            <Navigasi/>
            {/* <Bebas/> */}
            {/* <SectionHome/> */}
            <SectionHomecarimobil/>
            <Filtering/>
            {/* <HasilFilter/> */}
            <Footer/>
        </div>
    );
    }

export default CariMobil;
