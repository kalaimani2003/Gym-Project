import React from 'react'
import "./viewreghead.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

export const ViewReghead = ({ namee, cdd}) => {
    return (
        <>
            <div className="ViewReghead_con">
                <div className="ViewReghead_name_src_con">
                    <div className="ViewReghead_name">
                        {namee}
                    </div>
                    <div className="ViewReghead_src">
                        <div className="ViewReghead_filter">
                            <FilterListIcon sx={{ marginRight: "10px" }} />
                        </div>
                        <div className="ViewReghead_src_inp_box">
                            <SearchIcon />
                            <input className='ViewReghead_src_inp' type="text" />
                        </div>
                    </div>
                </div>
                {cdd}

            </div>
        </>
    )
}
