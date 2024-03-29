import React from "react";
import "./Input.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui"

const Input = ({
     onChange,
     value,
     className,
     wrapperStyle,
     icon,
     placeholder,
     disabled,
     pattern,
     type,
    }) => {

    return (
        <div className={classNames("input-wrapper", className)} style={wrapperStyle}>
            <div className="container-input">
                {icon && <Icon type={icon} width="22" heigth="22" />}
                <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                pattern={pattern}
                />
            </div>
        </div>
    );
};

Input.defaultProps = {
    disabled: false,
    placeholder: "Value",
    type: "text",
};

export default Input;