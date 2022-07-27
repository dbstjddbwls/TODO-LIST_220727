import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from "react-redux";
import { allDelete } from "../reducer/actions";
import DateBox from './DateBox';
import Count from './Count';

export default function Header(date) {
    let nowDayOfWeek = "";
    let nowMonth = "";
    let nowDay = "";
    const propsDate = date.date;
    const dispatch = useDispatch();
    
    if(propsDate){
        const apiDateTime = propsDate.datetime.split("T")[0].split("-");
        nowMonth = new Date(apiDateTime[1]).toLocaleString("en-US", { month: "long" });
        nowDay = apiDateTime[2]+"th";

        switch (propsDate.day_of_week) {
            case 0:{
                nowDayOfWeek = "Sunday";
                break;
            }
            case 1:{
                nowDayOfWeek = "Monday";
                break;
            }
            case 2:{
                nowDayOfWeek = "Tuesday";
                break;
            }
            case 3:{
                nowDayOfWeek = "Wednesday";
                break;
            }
            case 4:{
                nowDayOfWeek = "Thursday";
                break;
            }
            case 5:{
                nowDayOfWeek = "Friday";
                break;
            }
            case 6:{
                nowDayOfWeek = "Saturday";
                break;
            }
            default:
                break;
        }
    }
    
    const todolist = String(useSelector((state) => state.reducer.todolist).length);

    const clearList = ()=>{
        dispatch(allDelete());
    }

    return (
        <>
            <DateBox nowDayOfWeek={nowDayOfWeek} nowDay={nowDay} nowMonth={nowMonth} />
            <Count todolist={todolist} clearList={clearList} />        
        </>
    )
}
