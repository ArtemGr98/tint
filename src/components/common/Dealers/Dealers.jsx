import {Title} from "../../interface/Title";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import slideImg1 from "../../../img/Partners/Frame.png"
import slideImg2 from "../../../img/Partners/Frame (1).png"
import slideImg3 from "../../../img/Partners/Frame (2).png"
import slideImg4 from "../../../img/Partners/image 2.png"
import {DealersContainer} from "./DealersStyle";

const Dealers = () => {
    return <DealersContainer>
        <Title>
            Other Authorized Dealer's
        </Title>
        <Swiper
            slidesPerView={4}
            breakpoints={{
                1200: {
                    slidesPerView: 3.5,
                },
                900: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 2.5
                },
                700: {
                    slidesPerView: 2
                },
                300: {
                    slidesPerView: 1.5
                }
            }}
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
    </DealersContainer>
}
export default Dealers