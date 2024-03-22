import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteLoader() {
  const [state, setState] = useState({ quote: {}, isLoading: true });

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setState({ quote: randomQuote, isLoading: false });
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {state.isLoading && <p>Loading...</p>}
      <h2>{state.quote.text}</h2>
      <h3>{state.quote.author}</h3>
    </div>
  );
}
