import React, {useState} from "react";
import "../Auth.pcss";
import {Input, Button, Icon} from "/src/components/ui";
import axios from "axios";

const Authorization = ({setStage, phone, user_id}) => {
    const [code, setCode] = useState(0)
    const [confirmComplete, setConfirmComplete] = useState(false);


    const resend_code = async () => {
        await axios.post("https://hackaton.donorsearch.org/api/auth/resend_code/", {
            user_id: user_id,
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            });
        setCode(0)
    }


    const check_code = async () => {
        await axios.post("https://hackaton.donorsearch.org/api/auth/confirm_phone_reg/", {
            code: code,
            user_id: user_id,
            phone: phone,
        })
            .then((response) => {
                console.log(response)
                setConfirmComplete(true)
            })
            .catch((err) => {
                console.log(err)
                setCode(0)
                setConfirmComplete(false)
            });
    }

    if (confirmComplete) {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div className="auth_main">
                <div className="auth-icon-wrapper">
                    <Icon type="donorsearch_logo" width="43" height="30"/>
                </div>

                <div className="auth_form">
                    <h3 className="auth_title">Подтвердите ваш номер</h3>

                    <div className="mb-3">
                        <label className="auth_label mb-2">Мы отправили код на {phone}</label>
                        <Input value={code} onChange={(e) => setCode(e.target.value)}
                               placeholder="Введите код из СМС"/>
                    </div>
                </div>

                <div>
                    <div className="d-grid mb-2">
                        <Button onClick={check_code} text="Проверить код" theme="gradient"/>
                    </div>
                    <label onClick={resend_code} className="auth-link-grey">Отправить повторно код через 34 секунд</label>
                    <label onClick={() => setStage("register")} className="auth-link">Изменить номер телефона</label>
                </div>

            </div>
        )
    }
};

export default Authorization