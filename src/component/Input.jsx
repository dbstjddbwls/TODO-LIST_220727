import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import {addTodo} from "../reducer/actions"

export default function Input() {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    }

    // 리스트 추가 실행 함수
    const handleClick = () => {
        const todo = {
            title: text,
            check: false,
        };
        if(todo.title === ""){
            alert("내용을 입력해주세요!")
        }
        else{
            dispatch(addTodo(todo));
            setText("");
        }
    };
    
    // 누른 키가 Enter면 아래 함수 실행
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };
    
    return (
        <div className='inputBox'>
            <button onClick={handleClick}>+</button>
            <input
                type="text"
                placeholder="Type your task"
                onChange={handleChange}
                value={text}
                onKeyDown={handleKeyPress}
                maxLength="10"
            />
            
        </div>
    );
}
