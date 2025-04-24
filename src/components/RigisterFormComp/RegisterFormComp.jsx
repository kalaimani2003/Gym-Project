import React from 'react'
import "./Registerformcomp.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { NormalInp } from '../../common/NormalInput/NormalInp';
import { Link } from 'react-router-dom';

export const RegisterFormComp = ({useDashTab}) => {
    return (
        <>
            <div className="RegisterFormComp_con">
                <div className="RegisterFormComp_back">
                    <div className="RegisterFormComp_back_box" onClick={()=>useDashTab("")}>
                        <KeyboardBackspaceIcon /> Back
                    </div>
                </div>
                <div className="RegisterFormComp_heading">
                    Registration form
                </div>
                <div className="RegisterFormComp_form_con">
                    <div className="RegisterFormComp_form_inps">
                        <div className="RegisterFormComp_form_inps_in">
                            <NormalInp inp_type={"text"} inp_plac={"Name"}/>
                            <NormalInp inp_type={"number"} inp_plac={"Age"}/>
                            <NormalInp inp_type={"text"} inp_plac={"Joining Date"}/>
                            <NormalInp inp_type={"text"} inp_plac={"City"}/>
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"}/>
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"}/>
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"}/>
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"}/>
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"}/>
                        </div>

                    </div>
                    <div className="RegisterFormComp_form_camera">

                    </div>
                </div>
            </div>


        </>
    )
}
