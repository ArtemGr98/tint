import styled from "styled-components"
import LoaderGif from "../../../img/common/loader2.gif"

const LoaderImg = styled.img`
    position: ${({position}) => position !== undefined ? 'statik' : 'fixed'};
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    margin: 50px 0;
`

const Loader = ({position}) => <LoaderImg src={LoaderGif} position={position} />
export default Loader