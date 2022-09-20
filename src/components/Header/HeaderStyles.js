import styled, { keyframes } from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  background: #FFFFFF;
  width: 100vw;
`


export const HeaderTop = styled.div`
  height: 32px;
  background: #282828;
  display: flex;
  justify-content: space-around;
  align-items: center;


`
const marquee = keyframes`
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-100%, 0);
  }
`

export const HeaderTopText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
  padding: 8px 0;

  @media (max-width: 1000px) {
    width:100%;
    white-space:nowrap;
    overflow:hidden;

    span {
      display:inline-block;
      padding-left:100%;
      animation: ${marquee} 15s infinite linear;
    }
  }
`
export const HeaderTopClose = styled.button`
  color: white;
`
export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`
export const HeaderLink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
  margin-right: 30px;

  &.active {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #016FD0;
    border-bottom: 2px solid #016FD0;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`
export const PhoneLink = styled.a`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #000000;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`
export const Menu = styled.div`
  display: none;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;

  text-transform: uppercase;
  color: #016FD0;
  @media (max-width: 1000px) {
    display: block;
  }
`
// export const Hamburger = styled.div `
//   @media (max-width: 1000px) {
//       display: flex;
//   }

//   overflow: hidden;
//   position: relative;
//   width: 55px;
//   height: 55px;
//   background: #030E1E;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-right: 20px;
//   display: none;
// `
// export const HamburgerLine = styled.div`

// `