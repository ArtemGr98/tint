import {ErrorMessage, Field, Form, Formik} from "formik";
import {ButtonBlue} from "../../interface/Button";
import * as Yup from "yup";
import {InputForm, ValidationError} from "../../interface/form";
import {QuestionsBtnText, QuestionsFlex} from "./QuestionsStyles";
import { useSendQuestions } from "../../../hooks/queryHooks";
import Loader from "../Loader/Loader";

const QuestionsForm = () => {
    const {mutateAsync, isLoading} = useSendQuestions()
    return <Formik
        initialValues={{
            name: '',
            message: '',
            email: ''
        }}
        validationSchema={Yup.object().shape({
            name: Yup.string()
                .required("Required"),
            email: Yup.string().email()
                .required("Required"),
        })}
        onSubmit={(values, actions) => {
            mutateAsync(values)
            actions.resetForm()
        }}
    >
        {props => <>
            {isLoading && <Loader />}
            <Form>
                <QuestionsFlex>
                    <div>
                        <Field type="text" name="name" placeholder="name" component={InputForm}/>
                    </div>
                    <div>
                        <Field type="text" name="message" placeholder="Message" component={InputForm}/>
                        {/* <ErrorMessage name="message" component={ValidationError}/> */}
                    </div>
                </QuestionsFlex>
               <QuestionsFlex>
                   <div>
                       <Field type="email" name="email" placeholder="Email *" component={InputForm}/>
                       {/* <ErrorMessage name="email" component={ValidationError}/> */}
                   </div>
                   <QuestionsFlex>
                       <QuestionsBtnText>We provide loaner cars</QuestionsBtnText>
                       <ButtonBlue type="submit" disabled={!(props.isValid && props.dirty)}>
                           Book a loaner
                       </ButtonBlue>
                   </QuestionsFlex>
               </QuestionsFlex>
            </Form>
            </>}
    </Formik>
}
export default QuestionsForm