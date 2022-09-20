import {
    HeaderBottom,
    HeaderContainer,
    HeaderLink,
    HeaderLogo,
    HeaderTop,
    HeaderTopClose,
    HeaderTopText,
    Menu,
    NavContainer,
    PhoneLink,
} from "./HeaderStyles"
import logo from '../../img/common/advanced_tint_logo_white 1.svg'
import phone from '../../img/Header/bi_phone-vibrate-fill.svg'
import {ButtonBlue} from "../interface/Button";
import {useState} from "react";
import MenuBurger from "./Burger";

const Header = () => {
    const [isHeaderTop, setHeaderTopHidden] = useState(true)

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
            <div>
                <HeaderLogo src={logo} alt="logo"/>
            </div>
            <MenuBurger />
            <Menu>MENU</Menu>
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
                <ButtonBlue>
                    Get EStimete
                </ButtonBlue>
            </div>
        </HeaderBottom>
    </HeaderContainer>
}

export default Header