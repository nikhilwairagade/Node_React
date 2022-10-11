import React, {  useState } from "react";
import { Outer } from "./style";
import { Formik, Form } from "formik";
import { Input } from "../../component/Form/input";
import { PrimaryButton } from "../../component/button";
import { validateSignin } from "./helper";
import AxiosInstance from "../../service/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = ({close}) => {

  const handleSignUp = (values) => {
    const data = {
        Email: values.email,
        Password: values.password,
    }
        AxiosInstance
          .post('SignIn', data)
          .then((response) => {
              toast(response.data.message);
              setLoading(false);
              setTimeout(()=>{
                close();
            },2000)
    
          }).catch(function (error) {
            toast.error(error.response.data.message,  { hideProgressBar: true })
            setLoading(false);
        });
    }

const [loading,setLoading] = useState(false);

    return (
      <>
      <ToastContainer />
    <Outer>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-7 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Sign In
                </h3>
                <Formik
                  initialValues={{email: "", password: ""}}
                  validationSchema={validateSignin}
                  onSubmit={(values) => {
                      setLoading(true);
                      handleSignUp(values);
                  }}
                >
                  {(props) => (
                    <Form>
                      <Input type="text" name="email" label='Email' value={props.values.email}/>

                      <Input type="password" name="password" label='Password' value={props.values.password}/>
                        <div style={{display:'flex'}}>
                            <PrimaryButton text={"SignIn"} disabled={!(props.dirty && props.isValid)} isLoading={loading} />
                            <PrimaryButton type='button' text={"Cancel"} onClick={close} />
                        </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Outer>
    </>
  );
};
