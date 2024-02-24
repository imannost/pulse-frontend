import React, { useState } from "react";
import "../Donor-plan.pcss";
import "./Type.pcss"
import { PushBtn } from "/src/components/ui";
import { useDispatch, useSelector } from 'react-redux';
import { setTypeID } from "/src/store/planSlice"


const Type = () => {
    const dispatch = useDispatch()
    const typeID = useSelector(state => state.plan.type_id)  

    const typeList = [
        {text: "Цельная кровь", id: "1"},
        {text: "Плазма", id: "2"},
        {text: "Тромбоциты", id: "3"},
        {text: "Эритроциты", id: "4"},
        {text: "Гранулоциты", id: "5"}
    ]

    return (
        <div>
            <h1 className="plan-header">Выберите тип донации</h1>
            <p className="plan-text">
                После выбора типа донации автоматически отобразится ближайшая доступная дата с учётом интервалов между донациями.
            </p>

            <div class="type-grid">
                {typeList.map(function(object, i){
                    return <div className="type-el" >
                            <div className="type-el-content">
                            <PushBtn onClick={() => dispatch(setTypeID({type_id: object.id}))} text={object.text}  key={i} isPushed={typeID == object.id} />
                            </div>
                        </div>
                })}
            </div>

        </div>
    )
};

export default Type