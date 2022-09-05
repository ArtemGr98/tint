import styled from "styled-components";
import {Flex} from "../interface/display";

export const FooterFlex = styled(Flex)`
  justify-content: space-between;
  padding: 2% 5%;
`
export const FooterColumn = styled.div`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  text-align: start;
  //padding: 50px;
  height: auto;
`
export const FooterText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #000000;
`
export const FooterPhone = styled.a`
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
`
export const MarginTop = styled.div`
  margin-top: 60px;
`
