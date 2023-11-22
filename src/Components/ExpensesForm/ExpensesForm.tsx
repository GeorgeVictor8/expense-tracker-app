import {
  Card,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CategoryModal from "../Modals/CategoryModal";
import { useState } from "react";
import {
  Expenses,
  ExpensesSlice,
} from "../../Redux/Features/Slices/ExpensesFormSlice";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../Redux/Features/store";

export default function ExpensesForm() {
  const [purchase, setPurchase] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [categoryKey, setCategoryKey] = useState(0);
  const [dateKey, setDateKey] = useState(0);
  const [cleared, setCleared] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const Category = useSelector(
    (state: RootState) => state.Categories.Categories
  );

  const setHandler = (
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };
  };

  const resetCategoryPicker = () => {
    setCategory("");
  };

  const resetDatePicker = () => {
    setDate("");
  };

  const handleDateChange = (newDate: Date | null) => {
    if (newDate !== null) {
      const selectedDate = new Date(newDate);
      var string = selectedDate.toLocaleDateString();
      var arr = string.split(":");
      setDate(arr[0]);
    }
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setCategoryKey((prevKey) => prevKey + 1);
    setDateKey((prevKey) => prevKey + 1);
    const newExpense: Expenses = {
      id: uuidv4(),
      Purchases: purchase,
      Cost: Number(cost),
      Categories: category,
      Date: date,
      Notes: notes,
    };

    dispatch(ExpensesSlice.actions.updatingExpenses(newExpense));
    setPurchase("");
    setCost("");
    setNotes("");
    resetCategoryPicker();
    resetDatePicker();
  };

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

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

        <form onSubmit={onSubmitHandler}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Purchase"
                placeholder="Enter your Purchase"
                variant="outlined"
                fullWidth
                required
                onChange={setHandler(setPurchase)}
                value={purchase}
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
                onChange={setHandler(setCost)}
                value={cost}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                key={categoryKey}
                select
                label="Select Category"
                defaultValue={""}
                helperText="Please select your Category"
                required
              >
                {Category.map((option: any) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    onClick={() => {
                      setCategory(option.name);
                    }}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <CategoryModal />
            </Grid>

            <Grid xs={12} sm={6} item>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="de"
                key={dateKey}
              >
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Pick Date"
                    slotProps={{
                      field: {
                        clearable: true,
                        onClear: () => setCleared(true),
                      },
                      textField: {
                        required: true,
                      },
                    }}
                    onChange={handleDateChange}
                  />
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
                value={notes}
                onChange={setHandler(setNotes)}
              />
            </Grid>

            <Grid xs={3} item sx={{ margin: "0px auto" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Expense
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}
