import CurrencyConverter from "./CurrencyConverter";

function SummaryPanel({ total, breakdown, expenseCount }) {
  const categories = Object.entries(breakdown);

  return (
    <section className="card">
      <h2>Summary</h2>

      <div className="summary-total">
        <span>Total Spending</span>
        <strong>₹{total.toFixed(2)}</strong>
      </div>

      <p className="summary-subtext">
        {expenseCount} {expenseCount === 1 ? "expense" : "expenses"} logged
      </p>

      <div className="breakdown">
        <h3>Category Breakdown</h3>

        {categories.length === 0 ? (
          <p className="empty-state">No category data yet.</p>
        ) : (
          <ul>
            {categories.map(([category, value]) => (
              <li key={category}>
                <span>{category}</span>
                <strong>₹{value.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>

      <CurrencyConverter amount={total} />
    </section>
  );
}

export default SummaryPanel;
