import Top from "../common/Top/Top";
import slideImg from "../../img/Portfolio/IMG_0020 3.png"

import {useState} from "react";
import Pagination from "../common/Pagination/Pagination";
import PortfolioImg from "../common/MiniPortfolio/PortfolioImg";
import styled from "styled-components";
import Loader from "../common/Loader/Loader";
import { useGetPortfolioImg } from "../../hooks/queryHooks";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";

const InframeContaner = styled.div`
    width: 100vw;
    height: 500px;
    @media (max-width: 600px) {
        height: 300px;
    }
`

const Portfolio = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const {isLoading, isError, data, error} = useGetPortfolioImg(currentPage)

    return <>
        <Top slidesImg={[slideImg, slideImg]} />
        <InframeContaner>
            <iframe 
                width="100%" height="100%" src="https://www.youtube.com/embed/94871Tqk8NM" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </InframeContaner>
        {
            isLoading ? <Loader /> : 
            isError ? <ErrorMessage error={error.message} /> :
            data.data.count ? <>
                <PortfolioImg portfolioImgData={data.data.results} />
                <Pagination totalItem={data.data.count} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </> : <div>the gallery is empty</div>
        }
    </>
}
export default Portfolio