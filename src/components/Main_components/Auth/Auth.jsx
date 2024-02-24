import React, { useState } from "react";
import Authorization from "/src/components/Main_components/Auth/Authorization/Authorization.jsx";
import Registration from "/src/components/Main_components/Auth/Registration/Registration.jsx";
import ConfirmEmail from "/src/components/Main_components/Auth/ConfirmEmail/ConfirmEmail.jsx";
import ConfirmPhone from "/src/components/Main_components/Auth/ConfirmPhone/ConfirmPhone.jsx";

const Auth = () => {

    const [stage, setStage] = useState("auth")

    if (stage === "auth") {
        return (
            <Authorization setStage={setStage}/>
        );
    } else if (stage === "register") {
        return (
            <Registration setStage={setStage}/>
        );
    } else if (stage === "confirm_email") {
        return (
            <ConfirmEmail setStage={setStage}/>
        );
    } else if (stage === "confirm_phone") {
        return (
            <ConfirmPhone setStage={setStage}/>
        );
    }
};

export default Auth