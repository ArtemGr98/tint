import styled from "styled-components";
import backgroundImg from "../../../img/GetStarted/Rectangle 879.png"
import {Flex} from "../../interface/display";

export const GetStartedContainer = styled.div`
  background-image: url("${backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px 0;
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`
export const GetStartedBtn = styled(Flex)`
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  a {
    @media (max-width: 1000px) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
    margin-right: 20px;
  }
`