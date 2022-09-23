import styled from "styled-components";

export const TopContainer = styled.div`
  position: relative;
  padding-top: 108px;
  @media (max-width: 1000px) {
    padding-top: 82px;
  }
`
export const SocialTop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  right: 5%;
  z-index: 100;
  @media (max-width: 600px) {
    top: 35%;
  }
`
export const SocialLink = styled.a`
  width: 61px;
  height: 61px;
  background: #000000;
  box-shadow: 0px 4px 27px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`
export const SlideImg = styled.img`
  width: 100vw;
  min-height: 200px;
  @media (max-width: 600px) {
    object-fit: cover;
  }
`
