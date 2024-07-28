import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import { useState } from "react";
import { yellow } from '@mui/material/colors';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Interview\u00a0ID', minWidth: 100 },
  {
    id: 'role',
    label: 'Applied Job',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'country',
    label: 'Country',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, role, country, status) {
  return { name, code, role, country, status };
}

const rows = [
  createData('Aditya',1324171354, 'Artificial Intelligence','IN', "Pending"),
  createData('Adi',1403500365,'Artificial Intelligence', 'CN', "Pending"),
  createData('Aesh',60483973,'Artificial Intelligence', 'IT',  "Pending"),
  createData('Adit',327167434, 'Artificial Intelligence','US',  "Pending"),
  createData('Agam', 37602103,'Artificial Intelligence','CA',  "Pending"),
  createData('Austin', 25475400,'Artificial Intelligence','AU',  "Pending"),
  createData('Amarth',83019200, 'Artificial Intelligence','DE', "Pending"),
  createData('Aastha', 4857000,'Artificial Intelligence','IE',  "Pending"),
  createData('Aman', 126577691,'Artificial Intelligence','MX',  "Pending"),
  createData('Aavni', 126317000,'Artificial Intelligence','JP',  "Pending"),
  createData('Akash', 67022000,'Artificial Intelligence','FR',  "Pending"),
  createData('Arun', 67545757,'Artificial Intelligence','GB', "Pending"),
  createData('Austria', 146793744,'Artificial Intelligence','RU', "Pending"),
  createData('Akhilesh', 200962417,'Artificial Intelligence','NG', "Pending"),
  createData('Achint',210147125,'Artificial Intelligence', 'BR',  "Pending"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 629 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}