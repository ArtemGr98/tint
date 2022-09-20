import styled from "styled-components";

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
  @media (max-width: 700px) {
    width: 100%;
  }
`