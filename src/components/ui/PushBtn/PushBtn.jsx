import React from "react";
import "./PushBtn.pcss"
import classNames from "classnames";

const Button = ({ onClick, isPushed, text  }) => {

    return (
        <div onClick={onClick}
         className={classNames(
            "main-push-btn", {
                "main-push-btn__pushed": isPushed,
            }
         )}>
            <p>{text}</p>
        </div>
    );
};

Button.defaultProps = {
    onClick: null,
    text: "Кнопка",
  };

export default Button