import React, { useMemo } from 'react';
import { useTable } from 'react-table';
//import { DATA } from './data1.json';
import { COLUMNS } from './columns';
import './styles1.css';
 
const DATA = require("./data1.json");
 
export const Table = () => {
 
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])
 
    const tableInstance = useTable({
        columns,
        data
    })
 
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
 
    return (
        <React.Fragment>
            <p>Opportunity Medical Center - Report</p>
        <table {...getTableProps()} class="center">
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    )
                    )
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </React.Fragment>
    )
};
 
export default Table;
