import { createFileRoute } from '@tanstack/react-router';

const Expenses = () => {
  return <div className="p-2">Show All Expenses</div>;
};

export const Route = createFileRoute('/expenses')({
  component: Expenses
});
