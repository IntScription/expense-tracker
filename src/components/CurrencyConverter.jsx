import { useState } from "react";
import useCurrency from "../hooks/useCurrency";

const currencies = ["USD", "EUR", "GBP", "INR"];

function CurrencyConverter({ amount }) {
  const [target, setTarget] = useState("USD");

  const { rate, loading, error } = useCurrency("INR", target);

  const converted = rate ? (amount * rate).toFixed(2) : null;

  return (
    <div className="currency-box">
      <h3>Currency Conversion</h3>

      <label>
        Convert to:
        <select value={target} onChange={(e) => setTarget(e.target.value)}>
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Loading rates...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && rate && (
        <p className="conversion-result">
          ₹{amount.toFixed(2)} → {target} {converted}
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
