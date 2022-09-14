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

const PortfolioImg = ({portfolioImg}) => {
    return (
        <PortfolioImgContainer data-uk-lightbox>
            {portfolioImg.map(imgObj => <PortfolioImgCard href={imgObj.img}>
                <img src={imgObj.img} key={imgObj.id} alt="portfolioImg"/>
            </PortfolioImgCard>)}
        </PortfolioImgContainer>
    );
};

export default PortfolioImg;