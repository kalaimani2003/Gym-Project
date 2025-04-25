import React from 'react'
import { ViewReghead } from '../../common/viewRegHead/viewReghead'
import { Table } from '../../common/table/Table'
import { ChecDelDown } from '../../common/checkdeldown/ChecDelDown'

export const ViewRegisterComp = () => {
  return (
    
    <>
    <ViewReghead namee={"View Registered"} cdd={<ChecDelDown/>}/>
    <Table/>
    
    </>
    
  )
}
