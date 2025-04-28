import React from 'react'
import { ViewReghead } from '../../common/viewRegHead/viewReghead'
import { Table } from '../../common/table/Table'

export const PaymentHistoryComp = () => {
  return (
    <>
      <ViewReghead namee={"Payment History"} />
      <div className="ViewRegisterComp_table">
        <Table />

      </div>
    </>
  )
}
