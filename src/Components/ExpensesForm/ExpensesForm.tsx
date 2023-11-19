import {
  Card,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CategoryModal from "../Modals/CategoryModal";

const categories = [
  {
    value: "1",
    label: "Groceries",
  },
  {
    value: "2",
    label: "Transportation",
  },
  {
    value: "3",
    label: "Entertainment",
  },
  {
    value: "4",
    label: "Living Expenses",
  },
  {
    value: "5",
    label: "Fun",
  },
];

export default function ExpensesForm() {
  return (
    <>
      <Card
        style={{
          maxWidth: 800,
          margin: "3rem auto",
          padding: "1.5rem 1rem",
        }}
      >
        <Typography align="center" gutterBottom variant="h3">
          Expenses Tracker
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Purchase"
                placeholder="Enter your Purchase"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                type="number"
                label="Cost"
                placeholder="Enter your Cost"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                select
                label="Select Category"
                defaultValue="Groceries"
                helperText="Please select your Category"
                required
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <CategoryModal/>
              {/* <Button style={{ margin: "10px" }}>
                <AddCircleIcon />
              </Button> */}
            </Grid>

            <Grid xs={12} sm={6} item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Pick Date" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid xs={12} item>
              <TextField
                type="Message"
                label="Type Any Additional Notes Here"
                placeholder="Enter Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>

            <Grid xs={3} item sx={{ margin: "0px auto" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}
