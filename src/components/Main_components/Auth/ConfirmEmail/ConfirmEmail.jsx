import React, {useState} from "react";
import "../Auth.pcss";
import {Input, Button, Icon} from "/src/components/ui";
import axios from "axios";
import { useSelector } from "react-redux";

const Authorization = ({setStage}) => {
    const [code, setCode] = useState("")

    const email = useSelector(state => state.register.email)
    const user_id = useSelector(state => state.register.user_id)

    const resend_code = async () => {
        await axios.post("https://hackaton.donorsearch.org/api/auth/resend_email_code/", {
            user_id: user_id,
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)

            });
    }

    const check_code = async () => {
        console.log(user_id, email)
        await axios.post("https://hackaton.donorsearch.org/api/auth/confirm_email_reg/", {
            code: code,
            user_id: user_id,
            email: email,
        })
            .then((response) => {
                setStage("auth")
                console.log(response.data)
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
                <h3 className="auth_title">Подтвердите вашу почту</h3>

                <div className="mb-3">
                    <label className="auth_label mb-2">Мы отправили письмо с кодом для подтверждения регистрации
                        на {email}</label>
                    <Input value={code} onChange={(e) => setCode(e.target.value)}
                        placeholder="Введите код"/>
                </div>
            </div>

            <div>
                <div className="d-grid mb-2">
                    <Button onClick={check_code} text="Проверить код" theme="gradient"/>
                </div>
                <label onClick={resend_code} className="auth-link-grey">Отправить повторно код через 34 секунд</label>
                <label onClick={() => setStage("register")} className="auth-link">Изменить адрес электронной
                    почты</label>
            </div>

        </div>
    )
    }

export default Authorization