import React from "react";
import "./Auth.pcss"
import { Input, Button, Icon } from "/src/components/ui";

const Auth = () => {

    return (
        <div className="auth_main">
          <div>
          <Icon type="donorsearch_logo" width="43" height="30"/>
          </div>

        <div className="auth_form">
          <h3 className="auth_title">Войти</h3>

          <div className="mb-3">
            <label className="auth_label mb-2">Номер телефона или email</label>
            <Input placeholder="Номер телефона или Email"/>
          </div>

          <div className="mb-3">
            <Input placeholder="Пароль"/>
          </div>

          <div className="mb-3">
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
        </div>

        <div>
          <div className="d-grid mb-2">
            <Button text="Войти" theme="gradient"/>
          </div>
          <label className="auth_label">У вас еще нет аккаунта? Зарегистрируйтесь </label>
        </div>
     
      </div>
    );
};

export default Auth