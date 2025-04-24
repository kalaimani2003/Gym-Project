import React, { useState } from 'react'
import { Dashboard } from '../../common/Dashboard/Dashboard'
import "./Dashboardcomp.css"
import { DashHead } from '../../common/Dashhead/dashhead'
import { useLocation } from 'react-router-dom'
import { Table } from '../../common/table/Table'

export const Dashboardcomp = () => {

    const [dashTab, useDashTab] = useState("");

    return (
        <>
            <Dashboard />
            <div className="Dashboardcomp-con">
                <DashHead useDashTab={useDashTab} />
                {(dashTab == "expire") ? <div className="Dashboardcomp_table_con">
                    <div className="Dashboardcomp_table_con_in">
                        <div className="Dashboardcomp_table_txt">
                            Accounts Expired
                        </div>
                        <div className="Dashboardcomp_table">
                            <Table />
                        </div>
                    </div>
                </div> : (dashTab == "New Register") ? "register form" :
                    <div className="Dashboardcomp_table_con">
                        <div className="Dashboardcomp_table_con_in">
                            <div className="Dashboardcomp_table_txt">
                                Accounts are going to expire within 3 days
                            </div>
                            <div className="Dashboardcomp_table">
                                <Table />
                            </div>
                        </div>
                    </div>}

            </div>
        </>


    )
}
