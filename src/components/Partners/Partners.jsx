import Top from "../common/Top/Top";
import slideImg from "../../img/Partners/IMG_0020 3.png"
import styled from "styled-components";
import slideImg1 from "../../img/Partners/Frame.png"
import slideImg2 from "../../img/Partners/Frame (1).png"
import slideImg3 from "../../img/Partners/Frame (2).png"
import slideImg4 from "../../img/Partners/image 2.png"

const PartnersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5%;
  img {
    //width: 25%;
    margin-right: 40px;
    margin-bottom: 100px;
    @media (max-width: 600px) {
      margin-right: 0px;
      margin-bottom: 50px;
    }
  }
`

const Partners = () => {
    return <>
        <Top slidesImg={[slideImg, slideImg]}/>
        <PartnersContainer>
            <img src={slideImg1} alt=""/>
            <img src={slideImg2} alt=""/>
            <img src={slideImg3} alt=""/>
            <img src={slideImg4} alt=""/>
            <img src={slideImg1} alt=""/>
            <img src={slideImg2} alt=""/>
            <img src={slideImg3} alt=""/>
            <img src={slideImg4} alt=""/>
            <img src={slideImg1} alt=""/>
            <img src={slideImg2} alt=""/>
            <img src={slideImg3} alt=""/>
            <img src={slideImg4} alt=""/>
        </PartnersContainer>
    </>
}
export default Partners