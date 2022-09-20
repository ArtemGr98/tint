import styled from "styled-components";
import {Flex} from "../interface/display";

export const QuestionsBtnText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-right: 30px;
  @media (max-width: 1200px) {
    padding: 30px 0;
    margin-right: 0px;
  }
`
export const QuestionsFlex = styled(Flex)`
  background: #F2F2F2;
  justify-content: space-around;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
`