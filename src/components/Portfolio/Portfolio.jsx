import Top from "../Top/Top";
import slideImg from "../../img/Portfolio/IMG_0020 3.png"

import {useEffect, useState} from "react";
import {portfolioApi} from "../../api/instance";
import Pagination from "../Pagination/Pagination";
import PortfolioImg from "../common/MiniPortfolio/PortfolioImg";

const Portfolio = () => {
    const [portfolioImgData, setPortfolioImgData] = useState([])

    const totalPages = Math.ceil(portfolioImgData.length / 2)

    useEffect(() => {
        portfolioApi().then(response => {
            setPortfolioImgData(response.data)
        })
    }, [])

    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <PortfolioImg portfolioImgData={portfolioImgData} />
        <Pagination totalPages={totalPages} setPortfolioImgData={setPortfolioImgData} />
    </>
}
export default Portfolio