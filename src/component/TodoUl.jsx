import React from 'react';
import { useSelector } from "react-redux";

import Input from "./Input"
import List from './List';
import CopyLight from './CopyLight';

export default function TodoUl({date}) {

    const todolist = useSelector((state) => state.reducer.todolist);

    return (
        <>
            <Input />
            <ul>
                {todolist.map((todo, idx)=>(
                    <List key={idx} todo={todo} />
                ))}
            </ul>
            <CopyLight />
        </>
    )
}
