import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export const ChecDelDown = ({ setPopValue, setPop }) => {
    return (
        <div className="ViewReghead_chk_del_down">
            <div className="ViewReghead_chk_del_down_box">
                <div className="ViewReghead_in_box">
                    <input type="checkbox" className='ViewReghead_checkbox' />
                </div>
                <div className="ViewReghead_in_box" onClick={() => { setPop(true); setPopValue("Are you sure you want to delete ?")}}>
                    <DeleteIcon />
                </div>
                <div className="ViewReghead_in_box" onClick={() => { setPop(true); setPopValue("Are you sure you want to download ?") }}>
                    <SaveAltIcon />
                </div>
            </div>
        </div>
    )
}
