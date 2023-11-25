import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Features/store";
import { TableHead, Typography } from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function IncomeLog() {
  const Balance = useSelector((state: RootState) => state.Balance.allIncome);

  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: 400,
        margin: "2rem",
        padding: "1.5rem 1rem",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Income History
      </Typography>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Amount</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Balance.map((Balance) => (
            <TableRow key={Balance.Amount}>
              <TableCell component="th" scope="row">
                {Balance.Amount}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {Balance.Description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
