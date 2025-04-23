import React from 'react'
import "./inp.css"

export const Inp = ({inp_icon,inp_type,inp_plac,name}) => {
    return (
        <>
            <div className={(name == "otp")? "inp_con_otp":"inp_con_out"}>
                <div className="inp_logo">
                    {inp_icon}
                </div>
                <input className={(name == "otp")? "inp_otp":'inp_input'} type={inp_type} placeholder={inp_plac} />
            </div>
        </>
    )
}
