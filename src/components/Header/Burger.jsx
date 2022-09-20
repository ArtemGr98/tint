import React from "react";
import { NavLink } from "react-router-dom";
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