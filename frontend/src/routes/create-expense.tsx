import { createFileRoute } from '@tanstack/react-router';

const CreateExpense = () => {
  return <div className="p-2">Create a new expense</div>;
};

export const Route = createFileRoute('/create-expense')({
  component: CreateExpense
});
