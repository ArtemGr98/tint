import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderTop = styled.div`
  height: 32px;
  background: #282828;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const HeaderTopText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
  padding: 8px 0;
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
`
export const PhoneLink = styled.a`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #000000;
  display: flex;
  align-items: center;
`