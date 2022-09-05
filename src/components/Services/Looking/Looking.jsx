import {LookingBottom, LookingColumn, LookingTop} from "./LookingStyles";
import backgroundImg from "../../../img/Services/Looking/Rectangle 16.png"
import {TextStn, Title, Title2} from "../../interface/Title";
import {ButtonBlue} from "../../interface/Button";
import twitterLogo from "../../../img/common/social/Frame 44.svg"
import facebookLogo from "../../../img/common/social/Frame 44 (1).svg"
import youtubeLogo from "../../../img/common/social/Frame 44 (2).svg"
import instagramLogo from "../../../img/common/social/Frame 44 (3).svg"
import Social from "../../common/Social/Social";

const Looking = () => {
    return <>
        <LookingTop backgroundImg={backgroundImg}>
            <LookingColumn>
                <Title2>
                    <span>Are you</span> looking
                </Title2>
                <TextStn>
                    Are you looking for an effective way to protect and enhance your car? Window tinting is
                    an excellent and affordable solution for all car owners seeking privacy, comfort, and
                    security while driving.
                    With Advanced Tint, you’ll get professional and high-quality custom car window tinting
                    that meets your needs and requirements quickly and reasonably priced.
                </TextStn>
                <ButtonBlue>
                    Get EStimete
                </ButtonBlue>
            </LookingColumn>
            <LookingColumn>
                <Title2>
                    <span>RECENT</span> WORK
                </Title2>
                <TextStn>
                    <ul>
                        <li>
                            UV Protection
                        </li>
                        <li>
                            Keeps Your Car Cooler
                        </li>
                        <li>
                            Protects your interior
                        </li>
                        <li>
                            Reduce glare
                        </li>
                        <li>
                            More privacy
                        </li>
                        <li>
                            Ceramic Coating for Cars
                        </li>
                        <li>
                            Long-Lasting “Clear Bra” Paint Protection
                        </li>
                        <li>
                            Commercial & Residential Window Tint
                        </li>
                        <li>
                            Rock Chip Repair
                        </li>
                    </ul>
                </TextStn>
                <ButtonBlue>
                    order service
                </ButtonBlue>
            </LookingColumn>
        </LookingTop>
        <LookingBottom>
            <Title color="white">
                CONNECT WITH US!
            </Title>
            <Social twitterLogo={twitterLogo} facebookLogo={facebookLogo}
                    youtubeLogo={youtubeLogo} instagramLogo={instagramLogo} />
        </LookingBottom>
    </>
}
export default Looking