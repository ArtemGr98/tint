import React from 'react';
import Top from "../common/Top/Top";
import slideImg from "../../img/Contact/IMG_0020 3.png"
import PartnersSlider from "../common/PartnersSlider/PartnersSlider";
import MiniPortfolio from "../common/MiniPortfolio/MiniPortfolio";
import Connect from "../common/Connect/Connect";
import Reviews from "../common/Reviews/Reviews";
import ContactForm from "./ContactForm";
import ContactMaps from "./ContactMaps";
import {Flex} from "../interface/display";
import styled from 'styled-components';

const ContactFlex = styled(Flex)`
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`


const Contact = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <ContactFlex>
            <ContactForm />
            <ContactMaps />
        </ContactFlex>
        <PartnersSlider />
        <Connect />
        <Reviews />
        <MiniPortfolio />
    </>
}

export default Contact;