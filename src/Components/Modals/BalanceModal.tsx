import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Grid, Stack, TextField } from "@mui/material";
import {
  Balance,
  updatingBalance,
} from "../../Redux/Features/Slices/BalanceSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BalanceModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>();

  const onHandleIncome = (e: any) => {
    e.preventDefault();
    const newIncome: Balance = {
      Amount: Number(amount),
      Description: description,
    };

    dispatch(updatingBalance(newIncome));
    handleClose();
  };

  const setHandler = (setState: React.Dispatch<React.SetStateAction<any>>) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="success">
        Input Balance
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={onHandleIncome}>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
              >
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      type="number"
                      label="Amount"
                      placeholder="Enter your Balance"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={setHandler(setAmount)}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      type="text"
                      label="Description"
                      placeholder="Balance Description"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={setHandler(setDescription)}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid xs={12} sm={6} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Add Balance
                    </Button>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      color="error"
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
