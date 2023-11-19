import { Card, Typography, Grid, Button } from "@mui/material";
import BalanceModal from "../Modals/BalanceModal";

export default function Balance() {
  return (
    <>
      <Card
        style={{
          maxWidth: 800,
          margin: "3rem auto",
          padding: "1.5rem 1rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} item>
            <Typography align="left" gutterBottom variant="h5">
              Total Income: $0
            </Typography>
            <BalanceModal/>
            {/* <Button variant="contained" color="success">
              Input Balance
            </Button> */}
          </Grid>
          <Grid xs={12} sm={6} item>
            <Typography align="right" gutterBottom variant="h5">
              Remaining Balance: $0
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
