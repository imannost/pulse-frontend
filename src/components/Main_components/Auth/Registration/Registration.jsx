import React, {useState} from "react";
import "../Auth.pcss";
import {Input, Button, Icon} from "/src/components/ui";
import axios from "axios";
import { setPhone, setEmail, setUserID } from "/src/store/registerSlice";import { useDispatch } from "react-redux";



const Authorization = ({setStage}) => {

    const [username, setUsername] = useState("")
    const [first_name, setFirstName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    const register = async () => {
        const data = new FormData()
        data.set('password', password)
        data.set('first_name', first_name)
        data.set('tag', "")
        var isPhone = false

        if (username.match(/^[\d\+][\d\(\)\ -]{4,14}\d$/)) {
            data.set('phone', username)
            isPhone = true
        } else if (username.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i)) {
            data.set('email', username)
        } else {
            console.log('Invalid username')
            return
        }
        
        await axios.post("https://hackaton.donorsearch.org/api/auth/registration/", data)
            .then((response) => {
                dispatch(setUserID({user_id: response.data.user_id}))
                if (isPhone) {
                    dispatch(setPhone({phone: username}))
                    setStage("confirm_phone")
                } else {
                    dispatch(setEmail({email: username}))
                    setStage("confirm_email")
                }
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
                <h3 className="auth_title">Зарегистрироваться</h3>

                <div className="mb-3">
                    <Input value={username} onChange={(e) => setUsername(e.target.value)}
                            placeholder="Номер телефона или Email"/>
                </div>

                <div className="mb-3">
                    <Input value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder="Имя"/>
                </div>

                <div className="mb-3">
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"
                            type={"password"}/>
                </div>

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку Персональных данных
                            и
                            принимаете Условия пользовательского соглашения
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <div className="d-grid mb-2">
                    <Button onClick={register} text="Зарегистрироваться" theme="gradient"/>
                </div>
                <label className="auth_label">или <label onClick={() => setStage("auth")}
                                                            className="auth-link">войдите</label> в аккаунт</label>
            </div>

        </div>
    )
    }


export default Authorization