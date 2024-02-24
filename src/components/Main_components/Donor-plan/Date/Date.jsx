import React, { useState } from "react";
import "../Donor-plan.pcss";
import "./Date.pcss";
import { SingleDatePicker } from "/src/components/ui";
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from "/src/store/planSlice"


const Date = () => {
    const dispatch = useDispatch()
    const date = useSelector(state => state.plan.date)

    const newDate = (date) => {
        dispatch(setDate({date: date}))
    }

    return (
        <div>
            <h1 className="plan-header">Укажите планируемую дату</h1>
            <div className="datepicker-wrapper">
                <SingleDatePicker startDate={date} setDate={newDate}/>
            </div>
        </div>
    )
};

export default Date