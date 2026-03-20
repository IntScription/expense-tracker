function ExpenseItem({ expense, onDeleteExpense }) {
  return (
    <article className="expense-item">
      <div>
        <h3>{expense.name}</h3>
        <p>{expense.category}</p>
      </div>

      <div className="expense-item-right">
        <strong>₹{expense.amount.toFixed(2)}</strong>
        <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
      </div>
    </article>
  );
}

export default ExpenseItem;
