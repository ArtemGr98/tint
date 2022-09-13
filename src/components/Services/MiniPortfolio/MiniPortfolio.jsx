import {Title} from "../../interface/Title";
import {MiniPortfolioCard, MiniPortfolioImg, MiniPortfolioText} from "./MiniPortfolioStyles";
import portfolioImg1 from "../../../img/Portfolio/16.png"
import portfolioImg2 from "../../../img/Portfolio/15.png"
import portfolioImg3 from "../../../img/Portfolio/17.png"
import portfolioImg4 from "../../../img/Portfolio/20.png"
import portfolioImg5 from "../../../img/Portfolio/875.png"
import portfolioImg6 from "../../../img/Portfolio/876.png"
import portfolioImg7 from "../../../img/Portfolio/877.png"
import portfolioImg8 from "../../../img/Portfolio/878.png"
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

const MiniPortfolio = () => {

    return <>
        <Title>
            Our Portfolio
        </Title>
        <MiniPortfolioText>
            Vinyl Wrapping, Window Tinting, Paint Protection Film and More for Automotive & Commercial
        </MiniPortfolioText>
        <MiniPortfolioImg>
            <div data-uk-lightbox>
                <a href={portfolioImg1}>
                    <MiniPortfolioCard src={portfolioImg1} />
                </a>
                <a href={portfolioImg2}>
                    <MiniPortfolioCard src={portfolioImg2} />
                </a>
            </div>

            <MiniPortfolioCard src={portfolioImg3} />
            <MiniPortfolioCard src={portfolioImg4} />
            <MiniPortfolioCard src={portfolioImg5} />
            <MiniPortfolioCard src={portfolioImg6} />
            <MiniPortfolioCard src={portfolioImg7} />
            <MiniPortfolioCard src={portfolioImg8} />
        </MiniPortfolioImg>
    </>
}
export default MiniPortfolio