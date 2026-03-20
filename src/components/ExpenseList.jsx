import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <section className="card">
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p className="empty-state">No expenses yet. Start by adding one.</p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ExpenseList;
