import {FooterColumn, FooterFlex, FooterPhone, FooterText, MarginTop} from "./FooterStyles";
import Social from "../Social/Social";
import img1 from "../../../img/common/social/footer/1.svg"
import img2 from "../../../img/common/social/footer/2.svg"
import img3 from "../../../img/common/social/footer/3.svg"
import img4 from "../../../img/common/social/footer/4.svg"
import logo from "../../../img/common/sw-logo 1.svg"
import {Link} from "react-router-dom";

const Footer = () => {

    return <footer>
        <FooterFlex>
            <FooterColumn>
                <FooterPhone href="tel:(425)-531-2713">
                    (425)-531-2713
                </FooterPhone>
                <FooterText>
                    Mon - Fri   9:00 am - 5:00 pm
                    <br/>
                    Sat - Sun   Closed
                </FooterText>
                <MarginTop />
                <Social instagramLogo={img1} youtubeLogo={img2}
                twitterLogo={img3} facebookLogo={img4}/>
            </FooterColumn>
            <FooterColumn>
                <div>
                    Advanced Tint LLC
                </div>
                <div>
                    <FooterText>
                        4233 NE Sunset Blvd #7
                    </FooterText>
                    <FooterText>
                        Renton Wa, 98059
                    </FooterText>
                    <FooterText>
                        Toll Free:1-(888)-477-TINT
                    </FooterText>
                    <FooterText>
                        P:(425)-531-2713
                    </FooterText>
                    <FooterText>
                        Email: support@seattlewindowtint.com
                    </FooterText>
                </div>
            </FooterColumn>
            <FooterColumn>
                <Link to="/">
                    <FooterText>
                        Services
                    </FooterText>
                </Link>
                <FooterText>
                    Window Tint Simulator in Denver, CO
                </FooterText>
                <Link to="about">
                    <FooterText>
                        About Us
                    </FooterText>
                </Link>
                <Link to="portfolio">
                    <FooterText>
                        Our Portfolio
                    </FooterText>
                </Link>
                <FooterText>
                    Specials
                </FooterText>
                <FooterText>
                    Request an Estimate
                </FooterText>
                <Link to="contact">
                    <FooterText>
                        Contact Us
                    </FooterText>
                </Link>
            </FooterColumn>
        </FooterFlex>
        <FooterFlex>
            <div>
                ACCESSIBILITY STATEMENT | PRIVACY POLICY
                © 2022 seattlewindowtint.com
            </div>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                Since 2007
            </div>
        </FooterFlex>
    </footer>
}
export default Footer