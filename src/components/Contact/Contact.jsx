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
const ContactInfo = styled.div`
    background: linear-gradient(96.5deg, #016FD0 -12.51%, #074E8C 107.02%);
    padding: 50px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    @media (max-width: 600px) {
        padding: 20px;
    }
    div {
        @media (max-width: 1000px) {
            width: 100%
        }
        @media (max-width: 600px) {
            font-size: 20px;
        }
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 35px;
        text-transform: uppercase;
        word-break: break-word;

        color: #FFFFFF;
        width: 50%;
        margin-bottom: 10px;
    }
`

const Contact = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <ContactInfo>
            <div>
                Advanced Tint LLC
            </div>
            <div>
                Toll Free: 1-(888)-477-TINT
            </div>
            <div>
                4233 NE Sunset Blvd #7
            </div>
            <div>
                P: (425)-531-2713
            </div>
            <div>
                Renton Wa, 98059
            </div>
            <div>
                Email: support@seattlewindowtint.com
            </div>
        </ContactInfo>
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