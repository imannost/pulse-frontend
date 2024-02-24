import React, { useState } from "react";
import "../Donor-plan.pcss";
import { PushBlock } from "/src/components/ui";
import { useDispatch, useSelector } from 'react-redux';
import { setIsFree } from "/src/store/planSlice"


const Payment = () => {
    const dispatch = useDispatch()
    const isFree = useSelector(state => state.plan.isFree)
    const text1 = "Питание или компенсация питания. 5% МРОТ порядка 700–1 500 ₽. Учитывается при получении звания Почётного донора."
    const text2 = "Деньги или социальная поддержка. Не учитывается при получении звания почётного донора."

    return (
        <div>
            <h1 className="payment-header">Выберите тип донации</h1>
            <div style={{marginBottom: "20px"}}><PushBlock onClick={() => dispatch(setIsFree({is_free: true}))} title="Безвозмездно" text={text1} isPushed={isFree}/></div>
            <div style={{marginBottom: "20px"}}><PushBlock onClick={() => dispatch(setIsFree({is_free: false}))} title="Платно" text={text2} isPushed={!isFree}/></div>
        </div>
    )
};

export default Payment