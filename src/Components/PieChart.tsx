import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Features/store";
import { calculateSpendingPerCategory } from "../Redux/Features/Slices/SpendingSlice";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const Expense = useSelector((state: RootState) => state.Expenses.allExpenses);
  const spendingPerCategory = calculateSpendingPerCategory(Expense);
  const cost = [];
  const categoriesNames = [];
  for (const [key, value] of spendingPerCategory.entries()) {
    categoriesNames.push(key);
    cost.push(value);
  }

  const data = {
    labels: categoriesNames,

    datasets: [
      {
        label: "#Expenses Per Categories",
        data: cost,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };
  return (
    <>
      <Link to="/">
        <div
          style={{
            margin: "3rem",
          }}
        >
          <Button variant="contained" color="success">
            Back To Home
          </Button>
        </div>
      </Link>
      {categoriesNames.length === 0 && (
        <Typography variant="h3" align="center">
          {" "}
          No Expenses
        </Typography>
      )}
      <div
        style={{
          maxWidth: 800,
          margin: "3rem auto",
        }}
      >
        <Pie data={data} options={options} />
      </div>
    </>
  );
}
