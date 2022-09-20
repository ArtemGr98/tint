import React from "react";
import { StyledBurger, StyledMenu } from "./BurgerStyles";

const BurgerContainer = () => {
    const [open, setOpen] = React.useState(false);
    return <div>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
    </div>
}

export default BurgerContainer

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          About us
        </a>
        <a href="/">
          Pricing
        </a>
        <a href="/">
          Contact
        </a>
      </StyledMenu>
    )
}

const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}