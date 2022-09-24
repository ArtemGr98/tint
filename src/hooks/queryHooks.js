import {useMutation, useQuery} from "react-query";
import {getPortfolioImg, getReviews, sendQuestions} from "../api/instance";

export const useGetPortfolioImg = (page) => useQuery(['portfolio img', page], () => getPortfolioImg(page))
export const useGetReviews = () => useQuery('reviews', getReviews)
export const useSendQuestions = () => useMutation('send questions', (data) => sendQuestions(data))