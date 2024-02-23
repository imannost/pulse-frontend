import React from "react";
import "./BackBtn.pcss"
// import classNames from "classnames";
// import {Icon} from "/src/components/ui"
// import { useDispatch } from "react-redux";

const BackBtn = ({ step }) => {

    return (
        <div></div>
        // <div onClick={() => dispatch(setStep({step: step}))} className={classNames("back-btn")}>
        //     <Icon type="arr-circle-left" width="22" height="22"/>
        //     <p>Назад</p>
        // </div>
    );
};

BackBtn.defaultProps = {
    step: 1,
  };

export default BackBtn