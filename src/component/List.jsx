import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, listCheck } from "../reducer/actions";

export default function List(props) {

    const dispatch = useDispatch();

    const { number, title, check, timeText } = props.todo;

    const todos = {
        number: number,
        title: title,
        check: check,
        timeText: timeText,
    };
    // 지우기 기능
    const removeClick = () => {
        dispatch(deleteTodo(number));
    };
    // 체크박스 작동 기능
    const checkClick = () => {
        dispatch(listCheck(todos))
    }



    return (
        <li>
            {/* 지우기 기능 */}
            {/* <button type="button" className="remove" onClick={removeClick}>
            </button> */}
            <label className={`custom-${check}`} htmlFor={`checkBox-${number}`}></label>
            <input type="checkbox" className="checkBox" onChange={checkClick} id={`checkBox-${number}`} />
            <span className={`check-${check}`} onClick={checkClick}>{title}</span>
            <span className="time">{timeText}</span>
        </li>
    )
}
