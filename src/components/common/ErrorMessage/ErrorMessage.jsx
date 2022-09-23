import styled from "styled-components"

const ErrorMessageStyled = styled.div`
    padding: 50px;
    color: red;
    font-weight: bold;
    font-size: 20px;
`

const ErrorMessage = ({error}) => {
    return <ErrorMessageStyled>
        Error: {error}
    </ErrorMessageStyled>
}

export default ErrorMessage