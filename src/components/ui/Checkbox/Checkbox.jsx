import React from "react";
import "./Checkbox.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui"

const Checkbox = ({ onClick, icon, text, theme, iconAfter, disabled }) => {



    return (
        <div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Не выходить из системы
            </label>
          </div>
        </div>
    );
};

export default Button