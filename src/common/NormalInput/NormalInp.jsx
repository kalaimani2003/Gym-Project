import React from 'react'
import "./normalinp.css"

export const NormalInp = ({ inp_type, inp_plac, name }) => {
    return (
        <>
            <div className="NormalInp_con">
                <input className="NormalInp_inp" type={inp_type} placeholder={inp_plac} />
            </div>
        </>
    )
}
