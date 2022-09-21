import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {questionsApi} from "../../api/instance";
import {InputForm, ValidationError} from "../interface/form";
import {ButtonBlue} from "../interface/Button";
import styled from "styled-components";
import backgroundImg from "../../img/Contact/Rectangle 881.png"

const ContactFormWrapper = styled.div`
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  padding: 50px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 20px 0;
    }
`

const ContactForm = () => {
    return <ContactFormWrapper backgroundImg={backgroundImg}>
        <Formik
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
            }}>
            {props => (
                <Form>
                    <div>
                        <Field type="text" name="name" placeholder="Full name *" component={InputForm}/>
                        <ErrorMessage name="name" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="email" name="email" placeholder="Email *" component={InputForm}/>
                        <ErrorMessage name="email" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="text" name="make" placeholder="Make *" component={InputForm}/>
                        <ErrorMessage name="make" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="text" name="model" placeholder="Model*" component={InputForm}/>
                        <ErrorMessage name="model" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="text" name="year" placeholder="Year*" component={InputForm}/>
                        <ErrorMessage name="year" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="text" name="service_requested" placeholder="Service Requested*"
                               component={InputForm}/>
                        <ErrorMessage name="service_requested" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="text" name="comments" placeholder="Comments*" component={InputForm}/>
                        <ErrorMessage name="comments" component={ValidationError}/>
                    </div>
                    <ButtonBlue type="submit">
                        Get ESTIMATE
                    </ButtonBlue>
                </Form>
            )}
        </Formik>
    </ContactFormWrapper>
};

export default ContactForm;