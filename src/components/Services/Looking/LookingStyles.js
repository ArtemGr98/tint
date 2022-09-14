import styled from "styled-components";

export const LookingTop = styled.div`
  display: flex;
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
`
export const LookingColumn = styled.div`
  width: 50%;
`