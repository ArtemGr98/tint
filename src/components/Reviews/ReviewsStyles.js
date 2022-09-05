import styled from "styled-components";

export const ReviewsContainer = styled.div`
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
`
export const ReviewsTop = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 130%;
  color: #000000;
  margin-bottom: 40px;
`
export const ReviewsText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  margin: 20px 0;
`