import React from 'react'
import "./dashhead.css";
import { Buttons } from '../button/Buttons';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const DashHead = () => {
    return (
        <>

            <div className="DashHead_con">
                <div className="DashHead_box1">
                    <Buttons bg_col={"#243040"} col={"white"} value= {"New Register"} icon={<PersonAddAlt1Icon sx={{marginRight:"5px"}}/>}/>
                </div>
                <div className="DashHead_box2">
                    <Buttons bg_col={"#00CE00"} col={"white"} value={"Accounts are going to expire within 3 days"} />
                    <Buttons bg_col={"#E01936"} col={"white"} value={"Accounts Expired"} />
                </div>
            </div>

        </>
    )
}
