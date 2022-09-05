import {Title} from "../../interface/Title";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import slideImg1 from "../../../img/Partners/Frame.png"
import slideImg2 from "../../../img/Partners/Frame (1).png"
import slideImg3 from "../../../img/Partners/Frame (2).png"
import slideImg4 from "../../../img/Partners/image 2.png"

const Dealers = () => {
    return <>
        <Title>
            Other Authorized Dealer's
        </Title>
        <Swiper
            slidesPerView={4}
        >
            <SwiperSlide>
                <img src={slideImg1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slideImg2} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slideImg3} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slideImg4} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slideImg4} alt=""/>
            </SwiperSlide>
        </Swiper>
    </>
}
export default Dealers