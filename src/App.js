import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Questions from "./components/Questions/Questions";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./api/instance";

const Services = React.lazy(() => import("./components/Services/Services"))
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"))
const About = React.lazy(() => import("./components/About/About"))
const Partners = React.lazy(() => import("./components/Partners/Partners"))
const Contact = React.lazy(() => import("./components/Contact/Contact"))

function App() {
    return <QueryClientProvider client={queryClient}>
        <div className="App">
            <Header/>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Services/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="partners" element={<Partners/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Routes>
            </React.Suspense>
            <GetStarted/>
            <Questions/>
            <Footer/>
        </div>
    </QueryClientProvider>
}

export default App;