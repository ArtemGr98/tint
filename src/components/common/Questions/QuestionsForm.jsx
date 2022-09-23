import {ErrorMessage, Field, Form, Formik} from "formik";
import {ButtonBlue} from "../../interface/Button";
import * as Yup from "yup";
import {InputForm, ValidationError} from "../../interface/form";
import {QuestionsBtnText, QuestionsFlex} from "./QuestionsStyles";
import {questionsApi} from "../../../api/instance";

const QuestionsForm = () => {
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
            questionsApi(values).then(data => console.log(data))
            actions.resetForm()
        }}
    >
        {props => (
            <Form>
                <QuestionsFlex>
                    <div>
                        <Field type="text" name="name" placeholder="name" component={InputForm}/>
                        <ErrorMessage name="name" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="text" name="message" placeholder="Message" component={InputForm}/>
                        <ErrorMessage name="message" component={ValidationError}/>
                    </div>
                </QuestionsFlex>
               <QuestionsFlex>
                   <div>
                       <Field type="email" name="email" placeholder="Email *" component={InputForm}/>
                       <ErrorMessage name="email" component={ValidationError}/>
                   </div>
                   <QuestionsFlex>
                       <QuestionsBtnText>We provide loaner cars</QuestionsBtnText>
                       <ButtonBlue type="submit">
                           Book a loaner
                       </ButtonBlue>
                   </QuestionsFlex>
               </QuestionsFlex>
            </Form>)}
    </Formik>
}
export default QuestionsForm