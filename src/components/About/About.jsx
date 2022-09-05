import slideImg from "../../img/About/IMG_0020 3.png";
import Top from "../Top/Top";
import MiniPortfolio from "../Services/MiniPortfolio/MiniPortfolio";
import styled from "styled-components";
import backgroundImg from '../../img/About/Rectangle 875.png'
import {TextStn, Title2} from "../interface/Title";

const AboutContainer = styled.div`
  background: url("${props => props.backgroundImg}");
  padding: 5%;
`

const About = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]}/>
        <AboutContainer backgroundImg={backgroundImg}>
            <Title2>
                Advanced <span>Tint</span>
            </Title2>
            <TextStn>
                has been providing paint protection film installation and automotive,
                residential and commercial window tinting services to clients in the
                Northwest for over 15 years. Our founder Alex opened our first shop in 2007.
                We have grown substantially since that time, but one thing that hasn't
                changed is our commitment to our clients and our product.
                We provide personalized service to everyone who comes into our shop whether
                it's a car owner looking to tint the windows and install paint protection
                film on their personal vehicle or a commercial client who needs assistance
                with a large-scale project. All of our technicians have many years of
                training and experience and work tirelessly to ensure the best results for our clients.
                As a small local business we stand by our work and services.
                We look forward to helping you with all your tinting and paint protection film needs.
                Come visit our state-of-the art shop in Renton or give us a call.
            </TextStn>
        </AboutContainer>
        <MiniPortfolio/>
    </>
}
export default About