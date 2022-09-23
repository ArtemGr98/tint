import Top from "../common/Top/Top";
import slideImg from "../../img/Portfolio/IMG_0020 3.png"

import {useState} from "react";
import Pagination from "../common/Pagination/Pagination";
import PortfolioImg from "../common/MiniPortfolio/PortfolioImg";
import usePortfolioImg from "../../hook/usePortfolioImg";
import styled from "styled-components";

const InframeContaner = styled.div`
    width: 100vw;
    height: 500px;
    @media (max-width: 600px) {
        height: 300px;
    }
`

const Portfolio = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const {isLoading, data, error} = usePortfolioImg(currentPage)
    
    if (isLoading) return <div>loading...</div>

    if (error) return <div>Error</div>

    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <InframeContaner>
            <iframe 
                width="100%" height="100%" src="https://www.youtube.com/embed/94871Tqk8NM" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </InframeContaner>
        <PortfolioImg portfolioImgData={data.data.results} />
        <Pagination totalItem={data.data.count} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
}
export default Portfolio