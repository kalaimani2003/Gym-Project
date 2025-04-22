import React from 'react'
import "./inp.css"

export const Inp = ({inp_icon,inp_type,inp_plac}) => {
    return (
        <>
            <div className="inp_con_out">
                <div className="inp_logo">
                    {inp_icon}
                </div>
                <input className='inp_input' type={inp_type} placeholder={inp_plac} />
            </div>
        </>
    )
}
