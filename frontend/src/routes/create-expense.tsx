import { createFileRoute } from '@tanstack/react-router';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const CreateExpense = () => {
  return (
    <div className="p-2">
      <h2>Create a new expense</h2>
      <form className="max-w-xl m-auto">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Title" />
        <Label htmlFor="amount">Amount</Label>
        <Input type="text" id="amount" placeholder="Amount" />
        <Button className="mt-4" type="submit">
          Create Expense
        </Button>
      </form>
    </div>
  );
};

export const Route = createFileRoute('/create-expense')({
  component: CreateExpense
});
