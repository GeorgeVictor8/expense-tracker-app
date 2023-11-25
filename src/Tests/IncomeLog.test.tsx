import { render, screen } from '@testing-library/react';
import IncomeLog from '../Components/History/IncomeLog';
import { Provider } from 'react-redux';
import { store } from '../Redux/Features/store';

test('renders income history table', () => {
  render(
    <Provider store={store}>
      <IncomeLog />
    </Provider>
  );
  const incomeHistoryHeading = screen.getByText('Income History');
  expect(incomeHistoryHeading).toBeInTheDocument();
});

test('displays income data correctly', () => {
  render(
    <Provider store={store}>
      <IncomeLog />
    </Provider>
  );

  const amountCell = screen.getByText('100');
  const descriptionCell = screen.getByText('initial Balance');
  expect(amountCell).toBeInTheDocument();
  expect(descriptionCell).toBeInTheDocument();
});
