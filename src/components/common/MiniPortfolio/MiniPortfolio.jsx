import {Title} from "../../interface/Title";
import {MiniPortfolioText} from "./MiniPortfolioStyles";

import PortfolioImg from "./PortfolioImg";
import {useEffect, useState} from "react";
import {portfolioApi} from "../../../api/instance";

const MiniPortfolio = () => {
    const [portfolioImgData, setPortfolioImgData] = useState([])

    useEffect(() => {
        portfolioApi().then(response => {
            setPortfolioImgData(response.data)
        })
    }, [])
    return <>
        <Title>
            Our Portfolio
        </Title>
        <MiniPortfolioText>
            Vinyl Wrapping, Window Tinting, Paint Protection Film and More for Automotive & Commercial
        </MiniPortfolioText>
        <PortfolioImg portfolioImgData={portfolioImgData} />
    </>
}
export default MiniPortfolio