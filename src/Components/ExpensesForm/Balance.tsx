import { Card, Typography, Grid, Button } from "@mui/material";
import BalanceModal from "../Modals/BalanceModal";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Features/store";

export default function Balance() {
  const Balance = useSelector((state: RootState) => state.Balance.allIncome);

  const expenses = useSelector(
    (state: RootState) => state.Expenses.allExpenses
  );

  const totalCost = () => {
    let total = 0;
    expenses.map((expense) => {
      total += expense.Cost;
    });
    return total;
  };

  const totalIncome = () => {
    let total = 0;
    Balance.map((income) => {
      total += income.Amount;
    });
    return total;
  };

  const remainingBalance = totalIncome() - totalCost();

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
              Total Income: ${totalIncome()}
            </Typography>
            <BalanceModal />
          </Grid>
          <Grid xs={12} sm={6} item>
            <Typography align="right" gutterBottom variant="h5">
              Total Expenses: ${totalCost()}
            </Typography>
            {remainingBalance <= 0 ? (
              <Typography align="right" gutterBottom variant="h5" color="error">
                Remaining Balance: ${remainingBalance}
              </Typography>
            ) : (
              <Typography align="right" gutterBottom variant="h5">
                Remaining Balance: ${remainingBalance}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
