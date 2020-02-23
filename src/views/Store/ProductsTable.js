import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const IVA = 0.19 // 19%

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(name, price, stock) {
  return { name, price, stock }
}

const ROWS = [
  createData('Frozen yoghurt', 159, 24),
  createData('Ice cream sandwich', 237, 37),
  createData('Eclair', 262, 16),
  createData('Cupcake', 305, 67, 4),
  createData('Gingerbread', 356, 16, 49),
]

const renderRows = rows => {
  return rows.map(row => {
    const ivaAmount = row.price * IVA
    const totalPrice = row.price + ivaAmount
    return (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{ivaAmount}</TableCell>
        <TableCell align="right">{totalPrice}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
      </TableRow>
    )
  })
}

export default function ProductsTable() {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">IVA</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows(ROWS)}</TableBody>
      </Table>
    </TableContainer>
  )
}
