// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Bebas from './components/Bebas';
import Footer from './components/Footer';
import Navigasi from './components/Navigasi';
import Pertanyaan from './components/Pertanyaan';
import SectionHome from './components/Section-Home';
import SectionService from './components/SectionService';
import SectionSewa from './components/SectionSewa';
import SectionWhy from './components/SectionWhy';
import Testimonial from './components/Testimonial';


function Home() {
    return (
        <div className="Home">
            <Navigasi/>
            {/* <Bebas/> */}
            <SectionHome/>
            <SectionService/>
            <SectionWhy/>
            <Testimonial/>
            <SectionSewa/>
            <Pertanyaan/>
            <Footer/>
        </div>
    );
    }

export default Home;
