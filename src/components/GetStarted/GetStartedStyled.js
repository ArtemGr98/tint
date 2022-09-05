import styled from "styled-components";
import backgroundImg from "../../img/GetStarted/Rectangle 879.png"
import {Flex} from "../interface/display";

export const GetStartedContainer = styled.div`
  background-image: url("${backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px 0;
`
export const GetStartedBtn = styled(Flex)`
  justify-content: center;

  a {
    margin-right: 20px;
  }
`