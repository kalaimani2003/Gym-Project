import React, { useState } from 'react'
import "./table.css"
import RestoreIcon from '@mui/icons-material/Restore';
import { Popup } from '../popup/Popup';

export const Table = ({ setPop, setPopValue }) => {


  return (
    <div className="table_con">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Joining Date</th>
            <th>Expire Within</th>
            <th>Expired</th>
            <th>Reneuwal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Profile 1</td>
            <td>John Doe</td>
            <td>+1 234 567 890</td>
            <td>2023-01-01</td>
            <td>1 year</td>
            <td>No</td>
            <td onClick={() => { setPop(true); setPopValue("Are you sure you want to renewal ?") }}><RestoreIcon /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Profile 2</td>
            <td>Jane Smith</td>
            <td>+1 987 654 321</td>
            <td>2023-02-15</td>
            <td>6 months</td>
            <td>No</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Profile 3</td>
            <td>Sam Johnson</td>
            <td>+1 555 123 456</td>
            <td>2022-11-30</td>
            <td>1 year</td>
            <td>Yes</td>
            <td><RestoreIcon /></td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}
