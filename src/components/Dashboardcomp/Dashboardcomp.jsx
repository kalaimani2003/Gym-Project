import React from 'react'
import { Dashboard } from '../../common/Dashboard/Dashboard'
import "./Dashboardcomp.css"
import { DashHead } from '../../common/Dashhead/dashhead'

export const Dashboardcomp = () => {
    return (
        <>
            <Dashboard />
            <div className="Dashboardcomp-con">
               <DashHead/>

            </div>
        </>


    )
}
