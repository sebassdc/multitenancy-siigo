/* eslint-disable react/prop-types */
import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow)

function createData(id, products, client) {
  return { id, products, client }
}

const ROWS = [
  createData(
    1,
    [
      {
        name: 'chicken',
        stock: 10,
      },
      {
        name: 'milk',
        stock: 0,
      },
      {
        name: 'monster',
        stock: 10,
      },
    ],
    'Pedro',
  ),
  createData(
    2,
    [
      {
        name: 'xbox',
        stock: 10,
      },
      {
        name: 'play',
        stock: 0,
      },
      {
        name: 'wii',
        stock: 11,
      },
    ],
    'Alfonso',
  ),
  createData(
    2,
    [
      {
        name: 'Chair',
        stock: 0,
      },
      {
        name: 'Table',
        stock: 2,
      },
    ],
    'Francisco',
  ),
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const ProductTable = props => {
  return (
    <Table aria-label="customized table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Stock</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.products.map(({ name, stock }, i) => (
          <TableRow key={i}>
            <TableCell>{name}</TableCell>
            <TableCell>{stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function CustomizedTables() {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Products</StyledTableCell>
            <StyledTableCell align="center">Client</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map(row => (
            <StyledTableRow>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell>
                <ProductTable products={row.products} />
              </StyledTableCell>
              <StyledTableCell align="center">{row.client}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
