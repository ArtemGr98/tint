import {useQuery} from "react-query";
import {getPortfolioImg, getReviews} from "../api/instance";

export const useGetPortfolioImg = (page) => useQuery(['portfolioImg', page], () => getPortfolioImg(page))
export const useGetReviews = () => useQuery('reviews', getReviews)