import {Title} from "../../interface/Title";
import {
    ColumnContainer,
    Service, ServiceBtn,
    ServiceColumn,
    ServiceColumnTitle,
    ServiceContainer,
    ServiceHover,
    ServiceLi, ServicePrice
} from "./AutoServicesStyles";
import serviceBg1 from '../../../img/Services/AutoServices/Rectangle 868.png'
import serviceBg2 from '../../../img/Services/AutoServices/Rectangle 869.png'
import serviceBg3 from '../../../img/Services/AutoServices/Rectangle 870.png'
import serviceBg4 from '../../../img/Services/AutoServices/Rectangle 871.png'
import {ButtonBlue, ButtonWhite} from "../../interface/Button";

const AutoServices = () => {
    return <>
        <Title>
            AUTO SERVICES
        </Title>
        <ServiceContainer>
            <Service backgroundImg={serviceBg1}>
                <Title color="white">
                    Window Tinting
                </Title>
                <ServiceHover>
                    <ColumnContainer>
                        <ServiceColumn>
                            <ServiceColumnTitle>
                                XPEL CS
                            </ServiceColumnTitle>
                            <ul>
                                <ServiceLi>
                                    UP TO 98%
                                </ServiceLi>
                                <ServiceLi>
                                    EAT REJECTION
                                </ServiceLi>
                                <ServiceLi>
                                    MULTI-LAYER
                                </ServiceLi>
                                <ServiceLi>
                                    NANO-CERAMIC
                                </ServiceLi>
                                <ServiceLi>
                                    PARTICLE TECHNOLOGY
                                </ServiceLi>
                                <ServiceLi>
                                    99% UVA & UVB RAY PROTECTION
                                </ServiceLi>
                                <ServiceLi>
                                    CRYSTAL CLEAR GPS, BLUETOOTH & RADIO
                                </ServiceLi>
                                <ServiceLi>
                                    COMMUNICATION
                                </ServiceLi>
                                <ServiceLi>
                                    TRANSFERABLE
                                </ServiceLi>
                                <ServiceLi>
                                    LIFETIME WARRANTY
                                </ServiceLi>
                            </ul>
                            <ServicePrice>
                                150 $
                            </ServicePrice>
                        </ServiceColumn>
                        <ServiceColumn>
                            <ServiceColumnTitle>
                                XPEL XR
                            </ServiceColumnTitle>
                            <ul>
                                <ServiceLi>
                                    GLARE REDUCTION & PRIVACY
                                </ServiceLi>
                                <ServiceLi>
                                    WILL NOT
                                </ServiceLi>
                                <ServiceLi>
                                    TURN PURPLE
                                </ServiceLi>
                                <ServiceLi>
                                    99% UVA & UVB RAY PROTECTION
                                </ServiceLi>
                                <ServiceLi>
                                    GPS AND RADIO-FRIENDLY
                                </ServiceLi>
                                <ServiceLi>
                                    TRANSFERABLE LIFETIME WARRANTY
                                </ServiceLi>
                            </ul>
                            <ServicePrice>
                                150 $
                            </ServicePrice>
                        </ServiceColumn>
                        <ServiceColumn>
                            <ServiceColumnTitle>
                                XPEL XR+
                            </ServiceColumnTitle>
                            <ul>
                                <ServiceLi>
                                    UP TO 98% HEAT REJECTION
                                </ServiceLi>
                                <ServiceLi>
                                    NANO-CERAMIC
                                </ServiceLi>
                                <ServiceLi>
                                    PARTICLE TECHNOLOGY
                                </ServiceLi>
                                <ServiceLi>
                                    99% UVA & UVB RAY
                                </ServiceLi>
                                <ServiceLi>
                                    PROTECTION
                                </ServiceLi>
                                <ServiceLi>
                                    GPS AND
                                </ServiceLi>
                                <ServiceLi>
                                    RADIO FRIENDLY
                                </ServiceLi>
                                <ServiceLi>
                                    TRANSFERABLE
                                </ServiceLi>
                                <ServiceLi>
                                    LIFETIME WARRANTY
                                </ServiceLi>
                            </ul>
                            <ServicePrice>
                                150 $
                            </ServicePrice>
                        </ServiceColumn>
                    </ColumnContainer>
                    <ServiceBtn>
                        <ButtonBlue>
                            order
                        </ButtonBlue>
                    </ServiceBtn>
                </ServiceHover>
            </Service>
            <Service backgroundImg={serviceBg2}>
                <Title color="white">
                    Paint Protection
                </Title>
            </Service>
            <Service backgroundImg={serviceBg3}>
                <Title color="white">
                    COMMERCIAL RESIDENTIAL
                    WINDOW TINT
                </Title>
            </Service>
            <Service backgroundImg={serviceBg4}>
                <Title color="white">
                    Rock CHIP REPAIR
                </Title>
            </Service>
        </ServiceContainer>
        {/* <ServiceBtn>
            <ButtonWhite>
                MOre servises
            </ButtonWhite>
        </ServiceBtn> */}
    </>
}
export default AutoServices