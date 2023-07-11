import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function ListUser({ users }) {
    return (
        <div style={{ marginLeft: '30px' }}>
            <h1>List User</h1>
            <TableContainer sx={{ marginTop: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{user.firstname}</TableCell>
                                <TableCell>{user.lastname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>{user.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

