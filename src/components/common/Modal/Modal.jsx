import { ErrorMessage, Field, Form, Formik } from "formik"
import { useContext } from "react";
import styled from "styled-components"
import * as Yup from "yup";
import { sendQuestions } from "../../../api/instance";
import { ModalContext } from "../../../App";
import { useSendQuestions } from "../../../hooks/queryHooks";
import { ButtonBlue } from "../../interface/Button";
import { InputForm, ValidationError } from "../../interface/form";
import Loader from "../Loader/Loader";

const ModalBlock = styled.div`
    position: fixed;
    padding: 50px 60px;
    width: 100%;
    max-width: 500px;
    overflow-y: auto;
    max-height: 100%;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #016FD0;
    /* -webkit-box-shadow: 14px 10px 13px -6px rgba(189,189,189,1);
    -moz-box-shadow: 14px 10px 13px -6px rgba(189,189,189,1);
    box-shadow: 14px 10px 13px -6px rgba(189,189,189,1); */
    input {
        color: white;
    }
    ${ButtonBlue} {
        border: 1px solid white;
    }
`
const ModalClose = styled.button`
    transition: all .2s;
    color: #F2F2F2;
    cursor: pointer;
    display: flex;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    @media (max-width: 600px) {
        right: 70px;
    }
    &:hover {
        color: #73CAC2;
    }
`


const Modal = () => {
    const {setModalOpen} = useContext(ModalContext)
    const {mutateAsync, isLoading} = useSendQuestions()

    return <ModalBlock>
        <ModalClose onClick={() => setModalOpen(false)}>✗</ModalClose>
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
                mutateAsync(values)
                actions.resetForm()
            }}>
            {props => <>
                {isLoading && <Loader />}
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
            </>}
        </Formik>
    </ModalBlock> 
}
export default Modal