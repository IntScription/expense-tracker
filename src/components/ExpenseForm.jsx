import { useState } from "react";

const categories = ["Food", "Travel", "Marketing", "Utilities", "Other"];

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "Food",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Expense name is required.");
      return;
    }

    if (!form.amount || Number(form.amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    setError("");
    onAddExpense({
      name: form.name.trim(),
      amount: form.amount,
      category: form.category,
    });

    setForm({
      name: "",
      amount: "",
      category: "Food",
    });
  }

  return (
    <section className="card">
      <h2>Add Expense</h2>

      <form className="expense-form" onSubmit={handleSubmit}>
        <label>
          Expense Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Lunch"
          />
        </label>

        <label>
          Amount
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="e.g. 250"
            min="0"
            step="0.01"
          />
        </label>

        <label>
          Category
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        {error ? <p className="error-text">{error}</p> : null}

        <button type="submit">Add Expense</button>
      </form>
    </section>
  );
}

export default ExpenseForm;
