import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const portfolioApi = () => instance.get(`/portfolio`)

export const questionsApi = data => instance.post('/questions', data)

export const reviewsApi = () => instance.get(`reviews`)