import {useEffect, useState} from "react";
import {ReviewsContainer, ReviewsText, ReviewsTop} from "./ReviewsStyles";
import {Title} from "../interface/Title";
import {Swiper, SwiperSlide} from "swiper/react";
import backgroundImg from "../../img/Reviews/Rectangle 874.png"
import {reviewsApi} from "../../api/instance";

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([])
    useEffect(() => {
        reviewsApi().then(response => {
            setReviewsData(response.data)
        })
    }, [])

    return <ReviewsContainer backgroundImg={backgroundImg}>
        <Title>
            Customer Reviews
        </Title>
        <Swiper
            slidesPerView={3}
            spaceBetween={70}
        >
            {reviewsData.map(review => {
                return <SwiperSlide key={review.id}>
                    <ReviewsTop>
                        {review.name} {review.date}
                    </ReviewsTop>
                    <div>
                        Rating: {review.rating}
                    </div>
                    <ReviewsText>
                        {review.text}
                    </ReviewsText>
                </SwiperSlide>
            })}

        </Swiper>
    </ReviewsContainer>
}

export default Reviews