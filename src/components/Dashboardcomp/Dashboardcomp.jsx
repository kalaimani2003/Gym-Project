import React, { useState } from 'react'
import { Dashboard } from '../../common/Dashboard/Dashboard'
import "./Dashboardcomp.css"
import { DashHead } from '../../common/Dashhead/dashhead'
import { Table } from '../../common/table/Table'
import { ViewReg } from '../../screens/ViewRegister/ViewReg'
import { Link, useLocation } from 'react-router-dom'
import { RegisterForm } from '../../screens/dashBoard/Registerform/RegisterForm'
import { PaymentHistory } from '../../screens/Payment-History/PaymentHistory'
import { Popup } from '../../common/popup/Popup'

export const Dashboardcomp = () => {

    const [dashTab, useDashTab] = useState("");
    const [dashTotal, useDashTotal] = useState("dashBoard");
    const location = useLocation();
    let cur_Loc = location.pathname.split("/").pop();
    // console.log(location.pathname.split("/").pop());
    const [pop, setPop] = useState(false);
    const [popValue, setPopValue] = useState("");

    return (
        <>
            <Dashboard useDashTotal={useDashTotal} />
            {(cur_Loc == "Dashboard") ? <div className="Dashboardcomp-con">
                {(dashTab == "New Register") ? "" : <DashHead useDashTab={useDashTab} />}
                {(dashTab == "expire") ? <div className="Dashboardcomp_table_con">
                    <div className="Dashboardcomp_table_con_in">
                        <div className="Dashboardcomp_table_txt">
                            Accounts Expired
                        </div>
                        <div className="Dashboardcomp_table">
                            <Table setPop={setPop} setPopValue={setPopValue}/>
                        </div>
                    </div>
                </div> : (dashTab == "New Register") ? <RegisterForm useDashTab={useDashTab} /> :
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
            </div> : (cur_Loc == "ViewRegister") ? <div className="Dashboardcomp-con">
                <ViewReg />
            </div> : (cur_Loc == "PaymentHistory") ? <div className="Dashboardcomp-con">
                {/* <ViewReg /> */}
                <PaymentHistory />
            </div> : (cur_Loc == "Logout") ? <div className="Dashboardcomp-con">
                {/* <ViewReg /> */}
                <Popup txt={"Are you sure you want to Logout ?"} btn1={"Logout"} btn2={"Cancel"} />

            </div> : ""}
            {pop ? <Popup txt={popValue} btn1={"sure"} btn2={"Cancel"}  setPop={setPop}/>  : ""}
        </>

    )
}
