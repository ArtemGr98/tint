import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper";
import {SlideImg, SocialLink, SocialTop, TopContainer} from "./TopStyles";
import twitterLogo from "../../img/common/social/Frame 44.svg"
import facebookLogo from "../../img/common/social/Frame 44 (1).svg"
import youtubeLogo from "../../img/common/social/Frame 44 (2).svg"
import instagramLogo from "../../img/common/social/Frame 44 (3).svg"

const Top = ({slidesImg}) => {
    return (
        <TopContainer>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
            >
                {slidesImg.map((slideImg, index) => {
                    return <SwiperSlide key={index}>
                        <SlideImg src={slideImg} alt="slideImg"/>
                    </SwiperSlide>
                })}
            </Swiper>
            <SocialTop>
                <SocialLink href="#">
                    <img src={twitterLogo} alt="twitterLogo"/>
                </SocialLink>
                <SocialLink href="#">
                    <img src={facebookLogo} alt="facebookLogo"/>
                </SocialLink>
                <SocialLink href="#">
                    <img src={youtubeLogo} alt="youtubeLogo"/>
                </SocialLink>
                <SocialLink href="#">
                    <img src={instagramLogo} alt="instagramLogo"/>
                </SocialLink>
            </SocialTop>
        </TopContainer>

    )
}

export default Top