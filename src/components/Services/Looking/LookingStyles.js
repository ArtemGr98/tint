import styled from "styled-components";
import {Title} from "../../interface/Title";

export const LookingTop = styled.div`
  display: flex;
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  margin-top: 100px;
`
export const LookingColumn = styled.div`
  width: 50%;
`

export const LookingBottom = styled.div`
  background: linear-gradient(96.5deg, #016FD0 -12.51%, #074E8C 107.02%);
  display: flex;
  align-items: center;
  justify-content: center;
  ${Title} {
    margin-right: 50px;
  }
`