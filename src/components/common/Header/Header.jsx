import {
    HeaderBottom,
    HeaderContainer,
    HeaderLink,
    HeaderLogo,
    HeaderTop,
    HeaderTopClose,
    HeaderTopText,
    NavContainer,
    PhoneLink,
} from "./HeaderStyles"
import logo from '../../../img/common/advanced_tint_logo_white 1.svg'
import phone from '../../../img/Header/bi_phone-vibrate-fill.svg'
import {ButtonBlue} from "../../interface/Button";
import {useContext, useState} from "react";
import MenuBurger from "./Burger";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../App";

const Header = () => {
    const [isHeaderTop, setHeaderTopHidden] = useState(true)
    const {setModalOpen} = useContext(ModalContext)

    return <HeaderContainer>
        {isHeaderTop && <HeaderTop>
            <HeaderTopText>
                <span>
                    In a respond of current situation with COVID-19 coronavirus,
                    we are treating each vehicle with alcohol solution outside,
                    and Ozone+UV air treatment machine inside.
                </span>
            </HeaderTopText>
            <HeaderTopClose onClick={() => setHeaderTopHidden(false)}>
                ✖
            </HeaderTopClose>
        </HeaderTop>}
        <HeaderBottom>
            <Link to='/'>
                <HeaderLogo src={logo} alt="logo"/>
            </Link>
            <MenuBurger isHeaderTop={isHeaderTop} />
            {/* <Menu>MENU</Menu> */}
            <NavContainer>
                <HeaderLink to="/">services</HeaderLink>
                <HeaderLink to="portfolio">Our Portfolio</HeaderLink>
                <HeaderLink to="about">About us</HeaderLink>
                <HeaderLink to="contact">Contact</HeaderLink>
                <HeaderLink to="partners">PARTNERS</HeaderLink>
            </NavContainer>
            <div>
                <PhoneLink href="mailto:(425)-531-2713">
                    <img src={phone} alt="phone"/>
                    (425)-531-2713
                </PhoneLink>
            </div>
            <div>
                <ButtonBlue onClick={() => setModalOpen(true)}>
                    Get EStimete
                </ButtonBlue>
            </div>
        </HeaderBottom>
    </HeaderContainer>
}

export default Header