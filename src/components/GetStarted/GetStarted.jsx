import {GetStartedBtn, GetStartedContainer} from "./GetStartedStyled";
import {Title2} from "../interface/Title";
import {ButtonBlack, ButtonBlue} from "../interface/Button";

const GetStarted = () => {
    return <GetStartedContainer>
        <Title2>
            <span>GET</span> STARTED
        </Title2>
        <GetStartedBtn>
            <ButtonBlack href="tel:(425)-531-2713">
                (425)-531-2713
            </ButtonBlack>
           <ButtonBlue>
               Get EStimete
           </ButtonBlue>
        </GetStartedBtn>
    </GetStartedContainer>
}
export default GetStarted