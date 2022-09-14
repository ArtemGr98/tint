import React from 'react';
import Top from "../Top/Top";
import slideImg from "../../img/Contact/IMG_0020 3.png"
import Dealers from "../common/Dealers/Dealers";
import MiniPortfolio from "../common/MiniPortfolio/MiniPortfolio";
import Connect from "../common/Connect/Connect";
import Reviews from "../Reviews/Reviews";
import ContactForm from "./ContactForm";
import ContactMaps from "./ContactMaps";
import {Flex} from "../interface/display";

const Contact = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <Flex>
            <ContactForm />
            <ContactMaps />
        </Flex>
        <Dealers />
        <Connect />
        <Reviews />
        <MiniPortfolio />
    </>
}

export default Contact;