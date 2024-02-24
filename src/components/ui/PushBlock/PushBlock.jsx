import React from "react";
import "./PushBlock.pcss"
import classNames from "classnames";

const Button = ({ onClick, isPushed, text, title  }) => {

    return (
        <div onClick={onClick}
         className={classNames(
            "main-block", {
                "main-block__pushed": isPushed,
            }
         )}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

Button.defaultProps = {
    onClick: null,
    text: "Кнопка",
  };

export default Button