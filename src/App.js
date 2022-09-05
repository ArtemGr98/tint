import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Questions from "./components/Questions/Questions";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";

function App() {
    return ( 
        <div className="App">
            <Header />
            <Routes>
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="about" element={<About />} />
                <Route path="partners" element={<Partners />} />
            </Routes>
            <GetStarted />
            <Questions />
            <Footer/>
        </div>
    );
}

export default App;