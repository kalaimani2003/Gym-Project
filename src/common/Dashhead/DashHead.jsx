import React from 'react'
import "./dashhead.css";
import { Buttons } from '../button/Buttons';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const DashHead = ({ useDashTab }) => {
    // console.log("hii");
    // useDashTab("expire");
    
    return (
        <>
            <div className="DashHead_con">
                <div className="DashHead_box1">
                    <div className="DashHead_box_box" onClick={()=>useDashTab("New Register")}>
                        <Buttons bg_col={"#243040"} col={"white"} value={"New Register"} icon={<PersonAddAlt1Icon sx={{ marginRight: "5px" }} />} />
                    </div>
                </div>
                <div className="DashHead_box2">
                    <div className="DashHead_box_box" onClick={()=>useDashTab("")}>
                        <Buttons bg_col={"#00CE00"} col={"white"} value={"Accounts are going to expire within 3 days"}/>
                    </div>
                    <div className="DashHead_box_box" onClick={()=>useDashTab("expire")}>
                        <Buttons bg_col={"#E01936"} col={"white"} value={"Accounts Expired"}/>
                    </div>
                </div>
            </div>

        </>
    )
}
