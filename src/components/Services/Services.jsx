import Top from "../common/Top/Top";
import AutoServices from "./AutoServices/AutoServices";
import PartnersSlider from "../common/PartnersSlider/PartnersSlider";
import Looking from "./Looking/Looking";
import Reviews from "../common/Reviews/Reviews";
import MiniPortfolio from "../common/MiniPortfolio/MiniPortfolio";
import slideImg from '../../img/Services/ServicesTop/IMG_0020 3.png'

const Services = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]}/>
        <AutoServices/>
        <PartnersSlider/>
        <Looking/>
        <Reviews/>
        <MiniPortfolio/>
    </>
}

export default Services