import {Title} from "../../interface/Title";
import {MiniPortfolioText} from "./MiniPortfolioStyles";

import PortfolioImg from "./PortfolioImg";
import usePortfolioImg from "../../../hook/usePortfolioImg";

const MiniPortfolio = () => {
    const {isLoading, data, error} = usePortfolioImg(1)

    if (error) return <div>error</div>

    return <>
        <Title>
            Our Portfolio
        </Title>
        <MiniPortfolioText>
            Vinyl Wrapping, Window Tinting, Paint Protection Film and More for Automotive & Commercial
        </MiniPortfolioText>
        {isLoading ? <div>Loader...</div> : data.data.count ?
            <PortfolioImg portfolioImgData={data.data.results} /> : <div>the gallery is empty</div>
        }
    </>
}
export default MiniPortfolio