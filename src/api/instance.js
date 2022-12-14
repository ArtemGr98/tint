import axios from "axios";
import {QueryClient} from "react-query";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
    // baseURL: "http://localhost:3001/"
})

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
})

export const getPortfolioImg = (page) => instance.get(`/car_images?page=${page}`)

export const sendQuestions = data => instance.post('/contact/', data)

export const getReviews = () => instance.get(`http://localhost:3001/reviews/`)