import React, { useEffect, useState } from "react";
import "./Donor-plan.pcss";
import { Icon, ProgressBar, Button } from "/src/components/ui";
import Type from "./Type/Type.jsx"
import Date from "./Date/Date.jsx"
import Payment from "./Payment/Payment.jsx"
import axios from "axios";


const DonorPlan = () => {

    const [stage, setStage] = useState(1)
    const [data, setData] = useState({})

    const stageComponent = () => {
        switch (stage) {
            case 1: return <Type />
            case 2: return <Date />
            case 3: return <Payment />
        }
    }

    const test = () => {
        axios.get("https://hackaton.donorsearch.org/api/auth/me/")
        .then((response) => {
            console.log(response)
            setData(response.data)
          })
        .catch((err) => {
        console.log(err)
        });
    
    }

    useEffect(() => {
        test()
    }, [])
    

    return (
        <div className="plan_main">
            {data}
            <p onClick={() => setStage(prevState => prevState - 1)}>назад</p>
            <div className="plan_wrapper">
                <div style={{width: "100%"}}>
                    <div className="plan-item-wrapper">
                        <Icon type="donorsearch_logo" width="43" height="30"/>
                    </div>

                    {stageComponent()}

                    <div className="plan-item-wrapper">
                        <Button onClick={() => setStage(prevState => prevState + 1)} icon="vector" text="" theme="gradient" className="plan-button"/>
                    </div>

                    <div className="plan-progress-wrapper">
                        <ProgressBar completed={ (stage - 1) / 7 * 100 % 100.001}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DonorPlan