import React from 'react'
import { ViewReghead } from '../../common/viewRegHead/viewReghead'
import { Table } from '../../common/table/Table'
import { ChecDelDown } from '../../common/checkdeldown/ChecDelDown'
import "./ViewRegisterComp.css"

export const ViewRegisterComp = ({ setPopValue, setPop }) => {
  return (

    <>
      <ViewReghead namee={"View Registered"} cdd={<ChecDelDown setPop={setPop} setPopValue={setPopValue} />}  />
      <div className="ViewRegisterComp_table">
        <Table />

      </div>

    </>

  )
}
