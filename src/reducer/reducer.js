import { Type_Add, Type_Delete, Type_AllDelete, Checking } from "./actions";

const initialState = {
    todolist: [],
};

export const reducer = (state = initialState, action) => {
    // TODO LIST 추가 액션
    // 기존 state 내 todolist에 action으로 들어온 새 todo를 추가
    if (action.type === Type_Add) {
        return {
            todolist: [...state.todolist, action.todo],
        };

    // TODO LIST 제거 액션
    // 기존 state 내 todolist에서 해당 number가 아닌 list들만 모아서 다시 배열로 만듦
    } else if (action.type === Type_Delete) {
        return {
            todolist: [...state.todolist.filter((todo) => todo.number !== action.number)],
        };
    // TODO LIST 초기화 액션
    } else if (action.type === Type_AllDelete) {
        return {
            todolist: [],
        };

    // CheckBox Click시 해당 값 저장 기능
    } else if (action.type === Checking) {
        const arr = [...state.todolist]
        arr.map((li)=>{
            if(action.todo.number ===  li.number){
                li.check = !li.check
            }
        })
        return {
            todolist: [...arr],
        };

    // 그 외 액션
    } else {
        return state;
    }
};