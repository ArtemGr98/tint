import {useQuery} from "react-query";
import {portfolioApi} from "../api/instance";

const UsePortfolioImg = (page) => {
    const {isLoading, data, error} = useQuery(['portfolioImg', page], () => portfolioApi(page))

    return {isLoading, data, error}
};

export default UsePortfolioImg