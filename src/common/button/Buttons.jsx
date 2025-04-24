import React from 'react'
import "./buttons.css"

export const Buttons = ({bg_col, col, value,icon}) => {
    return (
        <>
            <button className='buttons_con_btn' style={{ backgroundColor: bg_col, color: col }}>
                <div className="buttons_con">
                    {icon}
                    {value}
                </div>
            </button>
        </>
    )
}
