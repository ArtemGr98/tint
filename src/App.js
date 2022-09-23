import './App.css';
import Header from './components/common/Header/Header';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import Footer from "./components/common/Footer/Footer";
import GetStarted from "./components/common/GetStarted/GetStarted";
import Questions from "./components/common/Questions/Questions";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./api/instance";
import { useState } from 'react';
import Modal from './components/common/Modal/Modal';
import Loader from './components/common/Loader/Loader';

const Services = React.lazy(() => import("./components/Services/Services"))
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"))
const About = React.lazy(() => import("./components/About/About"))
const Partners = React.lazy(() => import("./components/Partners/Partners"))
const Contact = React.lazy(() => import("./components/Contact/Contact"))

export const ModalContext = React.createContext()

function App() {
    const [isModalOpen, setModalOpen] = useState(false)

    return <QueryClientProvider client={queryClient}>
        <ModalContext.Provider value={{setModalOpen}}>
            <div className="App">
                <Header/>
                <React.Suspense fallback={<Loader />}>
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
                {isModalOpen && <Modal />}
            </div>
        </ModalContext.Provider>
    </QueryClientProvider>
}

export default App;