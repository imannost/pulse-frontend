import React, { useState } from "react";
import "./Auth.pcss"
import { Input, Button, Icon } from "/src/components/ui";
import axios from "axios";

const Auth = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
      axios.post("https://hackaton.donorsearch.org/api/auth/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      });
    }

    return (
        <div className="auth_main">
          <div className="auth-icon-wrapper">
            <Icon type="donorsearch_logo" width="43" height="30"/>
          </div>

        <div className="auth_form">
          <h3 className="auth_title">Войти</h3>

          <div className="mb-3">
            <label className="auth_label mb-2">Номер телефона или email</label>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Номер телефона или Email"/>
          </div>

          <div className="mb-3">
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type={"password"}/>
          </div>

          {/* <div className="mb-3">
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
          </div> */}
        </div>

        <div>
          <div className="d-grid mb-2">
            <Button onClick={login} text="Войти" theme="gradient"/>
          </div>
          <label className="auth_label">У вас еще нет аккаунта? <label className="auth-link">Зарегистрируйтесь</label></label>
        </div>
     
      </div>
    );
};

export default Auth