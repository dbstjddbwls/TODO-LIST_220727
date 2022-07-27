import React from 'react'

export default function Count({todolist, clearList}) {
    return (
        <div className='count'>
            <p>{todolist} Tasks</p>
            <button onClick={clearList}>CLEAR LIST</button>
        </div>
    )
}
