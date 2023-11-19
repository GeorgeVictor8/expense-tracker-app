import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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

function createData(
  Item: string,
  Cost: number,
  Category: string,
  Date: number,
  Notes: string
) {
  return { Item, Cost, Category, Date, Notes };
}

const rows = [
  createData("yoghurt", 159, "lorem8 lorem8 lorem8", 24, "lorem8 lorem8 lorem8"),
  createData("sandwich", 237, "lorem8 lorem8 lorem8", 37, "lorem8 lorem8 lorem8"),
  createData("Eclair", 262, "lorem8 lorem8 lorem8", 24, "lorem8 lorem8 lorem8"),
  createData("Cupcake", 305, "lorem8 lorem8 lorem8", 67, "lorem8 lorem8 lorem8"),
  createData("Gingerbread", 356, "lorem8 lorem8 lorem8", 49, "lorem8 lorem8 lorem8"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        style={{
          maxWidth: 800,
          margin: "3rem auto",
          padding: "1.5rem 1rem",
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
          {rows.map((row) => (
            <StyledTableRow key={row.Item}>
              <StyledTableCell colSpan={1}>{row.Item}</StyledTableCell>
              <StyledTableCell colSpan={1}>{row.Cost}</StyledTableCell>
              <StyledTableCell colSpan={1}>{row.Category}</StyledTableCell>
              <StyledTableCell colSpan={1}>{row.Date}</StyledTableCell>
              <StyledTableCell colSpan={5}>{row.Notes}</StyledTableCell>
              <StyledTableCell colSpan={1}>
                {" "}
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
