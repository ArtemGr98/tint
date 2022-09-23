import {GetStartedBtn, GetStartedContainer} from "./GetStartedStyled";
import {Title2} from "../../interface/Title";
import {ButtonBlack, ButtonBlue} from "../../interface/Button";
import { useContext } from "react";
import { ModalContext } from "../../../App";

const GetStarted = () => {
    const {setModalOpen} = useContext(ModalContext)

    return <GetStartedContainer>
        <Title2>
            <span>GET</span> STARTED
        </Title2>
        <GetStartedBtn>
            <ButtonBlack href="tel:(425)-531-2713">
                (425)-531-2713
            </ButtonBlack>
           <ButtonBlue onClick={() => setModalOpen(true)}>
               Get EStimete
           </ButtonBlue>
        </GetStartedBtn>
    </GetStartedContainer>
}
export default GetStarted