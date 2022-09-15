import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const portfolioApi = () => instance.get(`/car_images/`)

export const questionsApi = data => instance.post('/contact/', data)

export const reviewsApi = () => instance.get(`/reviews/`)