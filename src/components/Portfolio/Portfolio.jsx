import Top from "../Top/Top";
import slideImg from "../../img/Portfolio/IMG_0020 3.png"

import {useState} from "react";
import Pagination from "../Pagination/Pagination";
import PortfolioImg from "../common/MiniPortfolio/PortfolioImg";
import usePortfolioImg from "../../hook/usePortfolioImg";

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {isLoading, data, error} = usePortfolioImg(currentPage)

    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        {isLoading ? <div>loading...</div> : data.data.length ?
        <PortfolioImg portfolioImgData={data.data} /> : <div>the gallery is empty</div> }
        <Pagination totalItem={8} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
}
export default Portfolio