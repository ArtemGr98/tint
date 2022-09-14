import {Title} from "../../interface/Title";
import {MiniPortfolioText} from "./MiniPortfolioStyles";

import PortfolioImg from "./PortfolioImg";
import {useEffect, useState} from "react";
import {portfolioApi} from "../../../api/instance";

const MiniPortfolio = () => {
    const [portfolioImg, setPortfolioImg] = useState([])

    useEffect(() => {
        portfolioApi().then(response => {
            setPortfolioImg(response.data)
        })
    }, [])
    return <>
        <Title>
            Our Portfolio
        </Title>
        <MiniPortfolioText>
            Vinyl Wrapping, Window Tinting, Paint Protection Film and More for Automotive & Commercial
        </MiniPortfolioText>
        <PortfolioImg portfolioImg={portfolioImg} />
    </>
}
export default MiniPortfolio