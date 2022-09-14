import Top from "../Top/Top";
import slideImg from "../../img/Portfolio/IMG_0020 3.png"

import {useEffect, useState} from "react";
import {portfolioApi} from "../../api/instance";
import Pagination from "../Pagination/Pagination";
import PortfolioImg from "../common/MiniPortfolio/PortfolioImg";

const Portfolio = () => {
    const [portfolioImg, setPortfolioImg] = useState([])

    const totalPages = Math.ceil(portfolioImg.length / 2)

    useEffect(() => {
        portfolioApi().then(response => {
            setPortfolioImg(response.data)
        })
    }, [])

    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <PortfolioImg portfolioImg={portfolioImg} />
        <Pagination totalPages={totalPages} setPortfolioImg={setPortfolioImg} />
    </>
}
export default Portfolio