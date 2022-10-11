import React, {useState } from "react";
import { Outer } from "./style";
import { Formik, Form } from "formik";
import { Input, StyledTextField } from "../../component/Form/input";
import MenuItem from '@material-ui/core/MenuItem';
import { PrimaryButton } from "../../component/button";
import { validate } from "./helper";
import AxiosInstance from "../../service/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = ({close}) => {

const [role, setRole] = useState(1);
const [loading,setLoading] = useState(false);

const handleSignUp = (values) => {
const data = {
    Name: values.name,
    Email: values.email,
    Password: values.password,
    UserType: role
}
    AxiosInstance
      .post('SignUp', data)
      .then((response) => {
          toast(response.data.message);
          setLoading(false);
          setTimeout(()=>{
            close();
        },2000)

      }).catch(function (error) {
        toast.error(error.response.data.message)
        setLoading(false);
    });
}

  const handleChange = (event) => {
    setRole(event.target.value);
  };

    return (
    <>
    <ToastContainer />
    <Outer>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Sign Up
                </h3>
                <Formik
                  initialValues={{ name:"", email: "", password: "",confirmPassword:"" }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                      setLoading(true);
                      handleSignUp(values);
                    
                  }}
                >
                  {(props) => (
                    <Form>
                      <Input type="text" name="name" label='Full Name' value={props.values.name}/>
                      <Input type="text" name="email" label='Email' value={props.values.email}/>

                      <Input type="password" name="password" label='Password' value={props.values.password}/>

                      <Input type="password" name="confirmPassword" label='Confirm Password' value={props.values.confirmPassword}/>

                      <StyledTextField
                            id="outlined-select-role"
                            select
                            label="Role"
                            value={role}
                            onChange={handleChange}
                            helperText="Please select your role"
                            >
                                <MenuItem key={1} value={1}>
                                {'Mentor'}
                                </MenuItem>
                                <MenuItem key={2} value={2}>
                                {'Employee'}
                                </MenuItem>
                        </StyledTextField>
                        <div style={{display:'flex'}}>
                        <PrimaryButton text={"Sign Up"} disabled={!(props.dirty && props.isValid)} isLoading={loading} />
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
