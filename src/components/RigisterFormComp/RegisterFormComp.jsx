import React from 'react'
import "./Registerformcomp.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { NormalInp } from '../../common/NormalInput/NormalInp';
import { Link } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export const RegisterFormComp = ({ useDashTab }) => {
    
    return (
        <>
            <div className="RegisterFormComp_con">
                <div className="RegisterFormComp_back">
                    <div className="RegisterFormComp_back_box" onClick={() => useDashTab("")}>
                        <KeyboardBackspaceIcon /> Back
                    </div>
                </div>
                <div className="RegisterFormComp_heading">
                    Registration form
                </div>
                <div className="RegisterFormComp_form_con">
                    <div className="RegisterFormComp_form_inps">
                        <div className="RegisterFormComp_form_inps_in">
                            <NormalInp inp_type={"text"} inp_plac={"Name"} />
                            <NormalInp inp_type={"number"} inp_plac={"Age"} />
                            <NormalInp inp_type={"text"} inp_plac={"Joining Date"} />
                            <NormalInp inp_type={"text"} inp_plac={"City"} />
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"} />
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"} />
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"} />
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"} />
                            <NormalInp inp_type={"text"} inp_plac={"Contact Number"} />
                        </div>

                    </div>
                    <div className="RegisterFormComp_form_camera_con">
                        <div className="RegisterFormComp_form_cam">
                            <AddAPhotoIcon sx={{ fontSize: "50px",color:"#756a6a" }} />
                        </div>
                        <div className="RegisterFormComp_form_cam_btn">
                            <button className='reg_fr_btn' onClick={() => CameraOutlined()}>Take photo</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
