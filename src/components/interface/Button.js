import styled from "styled-components";

export const ButtonBlue = styled.button`
  background: #016FD0;
  border: 2px solid #016FD0;

  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 10px 20px;
  &:hover {
    box-shadow: 0px 10px 10px -4px rgba(1, 111, 208, 0.35);
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    background: #828282;
    color: #BDBDBD;
    box-shadow: none;
    border: none
  }
`
export const ButtonWhite = styled(ButtonBlue)`
  background: white;
  border: 2px solid #000000;
  color: #000000;
`
export const ButtonBlack = styled.a`
  background: #000000;
  border: 2px solid #000000;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 10px 20px;
  &:hover {
    box-shadow: 0px 10px 10px -4px rgba(1, 111, 208, 0.35);
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`