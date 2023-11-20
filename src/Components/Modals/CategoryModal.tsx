import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addCategory,
  removeCategory,
} from "../../Redux/Features/Slices/CategoriesSlice";
import { v4 as uuidv4 } from "uuid";

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

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = React.useState("");

  const handleRemoveCategory = (categoryId: string) => {
    dispatch(removeCategory(categoryId));
  };

  const onAddHandler = () => {
    const newCategory = {
      id: uuidv4(),
      name: categoryName,
    };

    dispatch(addCategory(newCategory));
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} style={{ margin: "10px" }}>
        <AddCircleIcon />
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
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              <TextField
                label="Category"
                placeholder="Enter your new Category"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <Button
                    onClick={onAddHandler}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Add Category
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
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
