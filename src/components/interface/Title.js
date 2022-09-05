import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
  color: ${props => props.color || "#000000"};
  padding: 50px 0;
  span {
    color: #016FD0;
  }
`
export const Title2 = styled.h1`
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  text-transform: uppercase;
  color: #FFFFFF;
  span {
    color: #016FD0;
  }
`
export const TextStn = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: #FFFFFF;
  text-align: start;
`