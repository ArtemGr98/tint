import styled from "styled-components";
import { Title } from "../../interface/Title";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
export const ServiceHover = styled.div`
  display: none;
  /* opacity: 0;
  transition: all 1s; */
  /* position: relative; */
  /* bottom: -300px; */
  /* z-index: -1; */
`
export const ColumnContainer = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`
export const Service = styled.div`
  width: calc(50% - 10px);
  height: 49vw;
  margin-bottom: 20px;
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    ${ServiceHover} {
      display: block;
      /* opacity: 1; */
      /* bottom: 0; */
      /* z-index: 1; */
    }
  }
  ${Title} {
    @media (max-width: 600px) {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
  }

`
export const ServiceColumn = styled.div`
  width: 33%;
  max-height: 60%;
  max-height: 30vw;
  overflow-y: auto;
  //position: relative;
`
export const ServiceColumnTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #016FD0;
`
export const ServiceLi = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-transform: lowercase;
  color: #FFFFFF;
  margin-bottom: 10px;
`
export const ServicePrice = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
  //position: absolute;
  //bottom: 10px;
`
export const ServiceBtn = styled.div`
  text-align: center;
  margin: 30px 0;
`