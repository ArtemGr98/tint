import React from "react";
import { NavLink } from "react-router-dom";
import { BurgerContainerStyles, StyledBurger, StyledMenu } from "./BurgerStyles";

const BurgerContainer = ({isHeaderTop}) => {
    const [open, setOpen] = React.useState(false);
    return <BurgerContainerStyles>
        <Menu open={open} setOpen={setOpen} isHeaderTop={isHeaderTop} />
        <Burger open={open} setOpen={setOpen} />
    </BurgerContainerStyles>
}

export default BurgerContainer

const Menu = ({ open, isHeaderTop, setOpen }) => {
    return (
      <StyledMenu open={open} isHeaderTop={isHeaderTop} onClick={() => setOpen(!open)}>
        <NavLink to="/">
            services
        </NavLink>
        <NavLink to="portfolio">
            Our Portfolio
        </NavLink>
        <NavLink to="about">
            About us
        </NavLink>
        <NavLink to="contact">
            Contact
        </NavLink>
        <NavLink to="partners">
            PARTNERS
        </NavLink>
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