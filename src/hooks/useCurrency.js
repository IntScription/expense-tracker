import { useEffect, useState } from "react";

export default function useCurrency(base = "INR", target = "USD") {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRate() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?from=${base}&to=${target}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setRate(data.rates[target]);
      } catch (err) {
        setError(err.message || "Could not load exchange rate");
      } finally {
        setLoading(false);
      }
    }

    fetchRate();
  }, [base, target]);

  return { rate, loading, error };
}
