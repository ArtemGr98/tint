import Top from "../Top/Top";
import slideImg from "../../img/Portfolio/IMG_0020 3.png"

import {useEffect, useState} from "react";
import {portfolioApi} from "../../api/instance";
import Pagination from "../Pagination/Pagination";

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
        <div>
            {portfolioImg.map(imgObj => <img src={imgObj.img} key={imgObj.id} alt="portfolioImg"/>)}
        </div>
        <Pagination totalPages={totalPages} setPortfolioImg={setPortfolioImg} />
    </>
}
export default Portfolio