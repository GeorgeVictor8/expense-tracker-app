import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Features/store";
import { ExpensesSlice } from "../../Redux/Features/Slices/ExpensesFormSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function ExpensesLog() {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(
      ExpensesSlice.actions.deletingExpense({
        id: id,
        Purchases: "",
        Cost: 0,
        Categories: "",
        Date: "",
        Notes: "",
      })
    );
  };
  const Expense = useSelector((state: RootState) => state.Expenses.allExpenses);

  useEffect(() => {}, [Expense]);

  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: 800,
        margin: "3rem auto",
        padding: "2rem 1rem",
      }}
      sx={{ maxWidth: 800 }}
    >
      <Typography
        style={{
          padding: "1rem",
        }}
        variant="h6"
        align="center"
        gutterBottom
      >
        Your Saved Expenses are Logged in This table
      </Typography>
      <Table
        sx={{ maxWidth: 700 }}
        aria-label="customized table"
        style={{
          maxWidth: 800,
          margin: "3rem auto",
        }}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={1}>Item</StyledTableCell>
            <StyledTableCell colSpan={1}>Cost</StyledTableCell>
            <StyledTableCell colSpan={1}>Category</StyledTableCell>
            <StyledTableCell colSpan={1}>Date</StyledTableCell>
            <StyledTableCell colSpan={5}>Notes</StyledTableCell>
            <StyledTableCell colSpan={1}>Delete Item</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Expense.length !== 0 ? (
            Expense.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell colSpan={1}>{row.Purchases}</StyledTableCell>
                <StyledTableCell colSpan={1}>{row.Cost}</StyledTableCell>
                <StyledTableCell colSpan={1}>{row.Categories}</StyledTableCell>
                <StyledTableCell colSpan={1}>{row.Date}</StyledTableCell>
                <StyledTableCell colSpan={5}>{row.Notes}</StyledTableCell>
                <StyledTableCell colSpan={1}>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon
                      onClick={() => handleDelete(row.id)}
                      fontSize="inherit"
                    />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={12}>
                <Typography align="center" variant="h4">
                  No Expenses Logged
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      {Expense.length !== 0 &&
      <Typography align="center">
        <Link to="/statistics">
          <Button
            onClick={handleScrollToTop}
            variant="contained"
            color="success"
          >
            Check Statistics
          </Button>
        </Link>
      </Typography>}
    </TableContainer>
  );
}
