import React, { useState } from 'react';
import { NavBar } from '../../component/navBar/navbar';
import { SignIn } from './signIn';
import { SignUp } from './signUp';


export const Home = () => {
    const [signUp,setSignUp] = useState(false);
    const [signIn,setSignIn] = useState(false);

    const handelSignUpOpen = () => {
        setSignUp(true);
        setSignIn(false);
    }

    const handelSignInOpen = () => {   
        setSignIn(true);
        setSignUp(false);
    }


    return(
        <>
            <NavBar handelSignUpOpen={handelSignUpOpen} handelSignInOpen={handelSignInOpen} />
            {
                signUp && <SignUp close={ () =>setSignUp(false)}/>
            }
            {
                signIn && <SignIn close = {() => setSignIn(false)} />
            }
        </>
     )

}
