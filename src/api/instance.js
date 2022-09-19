import axios from "axios";
import {QueryClient} from "react-query";

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api/'
    baseURL: "http://localhost:3001/"
})

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

export const portfolioApi = (page) => instance.get(`/car_images?_limit=2&_page=${page}`)

export const questionsApi = data => instance.post('/contact/', data)

export const reviewsApi = () => instance.get(`/reviews/`)