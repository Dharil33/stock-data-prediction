import React, { useEffect } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function Home() {

    useEffect(()=>{
        // Get USer APi call
    },[])

    const rows = [
        createData('Ankit ', "Ankit@ankit.com"),
        createData('Ankit ', "Ankit@ankit.com"),createData('Ankit ', "Ankit@ankit.com"),
      ];
      function createData(name, email) {
        return { name, email };
      }
    return (
        <div style={{display:"flex", alignContent:"center", flexDirection:"column", width:"100%"}}>
           <h1>Home</h1> 
           <TableContainer component={Paper} style={{width:"50%", }}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Home
