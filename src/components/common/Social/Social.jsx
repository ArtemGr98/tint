import styled from "styled-components";

const SocialContainer = styled.div`
  a {
    margin-right: 44px;
  }
`

const Social = ({twitterLogo, facebookLogo, youtubeLogo, instagramLogo}) => {
    return <SocialContainer>
        <a href="#">
            <img src={twitterLogo} alt="twitterLogo"/>
        </a>
        <a href="#">
            <img src={facebookLogo} alt="facebookLogo"/>
        </a>
        <a href="#">
            <img src={youtubeLogo} alt="youtubeLogo"/>
        </a>
        <a href="#">
            <img src={instagramLogo} alt="instagramLogo"/>
        </a>
    </SocialContainer>
}
export default Social