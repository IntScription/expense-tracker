import { useEffect, useMemo, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function handleAddExpense(expense) {
    setExpenses((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...expense,
        amount: Number(expense.amount),
      },
    ]);
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  const total = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  const breakdown = useMemo(() => {
    return expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
  }, [expenses]);

  return (
    <main className="app">
      <div className="container">
        <header className="hero">
          <h1>Expense Tracker</h1>
          <p>Track, organize, and review your spending.</p>
        </header>

        <section className="layout">
          <div className="left-column">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList
              expenses={expenses}
              onDeleteExpense={handleDeleteExpense}
            />
          </div>

          <div className="right-column">
            <SummaryPanel
              total={total}
              breakdown={breakdown}
              expenseCount={expenses.length}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
