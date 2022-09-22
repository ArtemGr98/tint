import {LookingColumn, LookingTop} from "./LookingStyles";
import backgroundImg from "../../../img/Services/Looking/Rectangle 16.png"
import {TextStn, Title2} from "../../interface/Title";
import {ButtonBlue} from "../../interface/Button";
import Connect from "../../common/Connect/Connect";
import { useContext } from "react";
import { ModalContext } from "../../../App";

const Looking = () => {
    const {setModalOpen} = useContext(ModalContext)

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
                <ButtonBlue onClick={() => setModalOpen(true)}>
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
                <ButtonBlue onClick={() => setModalOpen(true)}>
                    order service
                </ButtonBlue>
            </LookingColumn>
        </LookingTop>
        <Connect />
    </>
}
export default Looking