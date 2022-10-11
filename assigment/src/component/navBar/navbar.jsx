import React from 'react';
import { Heading } from './style';


export const NavBar = ({handelSignUpOpen,handelSignInOpen}) => {

    return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <Heading style={{marginLeft:'auto',marginRight:'5px'}} onClick={handelSignUpOpen} >
                SignUp
            </Heading>
            <Heading onClick={handelSignInOpen} >
                LogIn                
            </Heading>
        </div>
    </nav>
    );
  }
