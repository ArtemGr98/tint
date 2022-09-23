import {ReviewsContainer, ReviewsText, ReviewsTop} from "./ReviewsStyles";
import {Title} from "../../interface/Title";
import {Swiper, SwiperSlide} from "swiper/react";
import backgroundImg from "../../../img/common/Reviews/Rectangle 874.png"
import { useGetReviews } from "../../../hooks/queryHooks";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Reviews = () => {
    const {isLoading, isError, data, error} = useGetReviews()

    return <ReviewsContainer backgroundImg={backgroundImg}>
        <Title>
            Customer Reviews
        </Title>
        <Swiper
            spaceBetween={70}
            breakpoints={{
                1000: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 2
                },
                300: {
                    slidesPerView: 1
                }
            }}
        >
            {
                isLoading ? <Loader /> :
                isError ? <ErrorMessage error={error.message} /> :
                data.data.length ? data.data.map(review => {
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
                }) : <div>there are no reviews</div>
            }
        </Swiper>
    </ReviewsContainer>
}

export default Reviews