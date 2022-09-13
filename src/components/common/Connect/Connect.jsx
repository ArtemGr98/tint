import React from 'react';
import styled from "styled-components";
import {Title} from "../../interface/Title";
import Social from "../Social/Social";
import twitterLogo from "../../../img/common/social/Frame 44.svg";
import facebookLogo from "../../../img/common/social/Frame 44 (1).svg";
import youtubeLogo from "../../../img/common/social/Frame 44 (2).svg";
import instagramLogo from "../../../img/common/social/Frame 44 (3).svg";

export const ConnectWrapper = styled.div`
  background: linear-gradient(96.5deg, #016FD0 -12.51%, #074E8C 107.02%);
  display: flex;
  align-items: center;
  justify-content: center;

  ${Title} {
    margin-right: 50px;
  }
`

const Connect = () => {
    return <ConnectWrapper>
        <Title color="white">
            CONNECT WITH US!
        </Title>
        <Social twitterLogo={twitterLogo} facebookLogo={facebookLogo}
                youtubeLogo={youtubeLogo} instagramLogo={instagramLogo}/>
    </ConnectWrapper>
}

export default Connect;