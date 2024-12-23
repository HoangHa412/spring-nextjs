import React from "react";
import Login from "@/components/Authentication";
import FormReset from "@/components/Authentication/ResetPass/FormReset";


const ForgotPassword = () =>{
    return (
        <Login>
            <FormReset/>
        </Login>
    )
}

export default ForgotPassword;