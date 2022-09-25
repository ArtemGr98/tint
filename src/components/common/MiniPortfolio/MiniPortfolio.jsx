import { useGetPortfolioImg } from "../../../hooks/queryHooks";
import {Title} from "../../interface/Title";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import {MiniPortfolioText} from "./MiniPortfolioStyles";

import PortfolioImg from "./PortfolioImg";

const MiniPortfolio = () => {
    const {isLoading, isError, data, error} = useGetPortfolioImg(1)
    
    return <>
        <Title>
            Our Portfolio
        </Title>
        <MiniPortfolioText>
            Vinyl Wrapping, Window Tinting, Paint Protection Film and More for Automotive & Commercial
        </MiniPortfolioText>
        {
            isLoading ? <Loader position="fixed" /> : 
            isError ? <ErrorMessage error={error.message} /> :
            data.data.count ?
            <PortfolioImg portfolioImgData={data.data.results} /> : <div>the gallery is empty</div>
        }
    </>
}
export default MiniPortfolio