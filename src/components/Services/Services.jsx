import Top from "../Top/Top";
import AutoServices from "./AutoServices/AutoServices";
import Dealers from "../common/Dealers/Dealers";
import Looking from "./Looking/Looking";
import Reviews from "../Reviews/Reviews";
import MiniPortfolio from "../common/MiniPortfolio/MiniPortfolio";
import slideImg from '../../img/Services/ServicesTop/IMG_0020 3.png'

const Services = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]}/>
        <AutoServices/>
        <Dealers/>
        <Looking/>
        <Reviews/>
        <MiniPortfolio/>
    </>
}

export default Services