import styled from "styled-components";

export const Textarea = styled.textarea`
  padding: 5px 10px;
  height: 50px;
  width: 400px;
  border-bottom: 1px solid #E0E0E0;
`

export const Input = styled.input`
  padding: 5px 10px;
  width: 400px;
  height: 50px;
  border-bottom: 1px solid #E0E0E0;
  color: #828282;
  background: #F2F2F2;
`

export const ValidationError = styled.div`
  font-weight: bold;
  color: red;
`

const ElementForm = Element => ({field, form: { touched, errors }, ...props}) => {
    return <Element {...field} {...props} />
}

export const InputForm = ElementForm(Input)
export const TextareaForm = ElementForm(Textarea)