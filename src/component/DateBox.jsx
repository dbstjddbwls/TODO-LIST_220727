import React from 'react'

export default function DateBox({nowDayOfWeek, nowDay, nowMonth}) {
    
    return (
        <div className="dateBox">
            <div className="dayRow">
                    <p>
                        <strong>
                            {nowDayOfWeek}
                        </strong>
                    , {nowDay}
                    </p>
                </div>
                <div className="monthRow">
                    {nowMonth}
            </div>
        </div>
    )
}
