export const Type_Add = "ADD_LIST";
export const Type_Delete = "DELETE_LIST";
export const Type_AllDelete = "All_DELETE";
export const Checking = "CHECKED";

let number = 0;

export const addTodo = (todo) => {
    // const nowTime = new Date

    const nowDate = new Date()
    const nowHour = nowDate.getHours();
    const nowMin = nowDate.getMinutes();
    const nowHalf = nowHour - 12 < 0 ? "AM" : "PM";
    const timeText = `${nowHour}:${nowMin} ${nowHalf}`

    return {
        type: Type_Add,
        todo: {
            number: number++,
            title: todo.title,
            check: todo.check,
            timeText : timeText,
        },
    };
};

export const deleteTodo = (number) => {
    return {
        type: Type_Delete,
        number,
    };
};

export const allDelete = () => {
    return {
        type: Type_AllDelete,
    };
};

export const listCheck = (todo)=>{
    return{
        type: Checking,
        todo: {
            ...todo,
            check: !todo.check,
        },
    }
};