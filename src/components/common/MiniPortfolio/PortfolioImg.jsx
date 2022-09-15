import styled from "styled-components";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

export const PortfolioImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const PortfolioImgCard = styled.a`
  width: 25%;
  max-height: 400px;
  display: block;
  //max-width: 360px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`

const PortfolioImg = ({portfolioImgData}) => {
    return (
        <PortfolioImgContainer data-uk-lightbox>
            {portfolioImgData.map(imgObj => <PortfolioImgCard href={imgObj.image} key={imgObj.id}>
                    <img src={imgObj.image} alt="portfolioImg"/>
                </PortfolioImgCard> )}
        </PortfolioImgContainer>
    );
};

export default PortfolioImg;