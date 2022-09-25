import styled from "styled-components";
import { ButtonBlue } from "../../interface/Button";
import { TextStn, Title2 } from "../../interface/Title";

export const LookingTop = styled.div`
  display: flex;
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
    padding: 20px;
  }
`
export const LookingColumn = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  @media (max-width: 700px) {
    width: 100%;
  }
  ${TextStn} {
    height: 70%;
  }
  ${Title2} {
    height: 15%;
  }
  ${ButtonBlue} {
    margin-top: 20px;
  }
`