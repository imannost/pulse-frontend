import React, { useState } from "react";
import Authorization from "/src/components/Main_components/Auth/Authorization/Authorization.jsx";

const Auth = () => {

    const [stage, setStage] = useState("auth")

    if (stage === "auth") {
        return (
            <Authorization setStage={setStage}/>
        );
    } else if (stage === "register") {
        return (
            <div></div>
        );
    }
};

export default Auth