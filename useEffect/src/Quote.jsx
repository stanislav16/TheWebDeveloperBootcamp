import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
export default function Quote() {
  const [quote, setQuote] = useState({});
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h3>{quote.text}</h3>
      <button onClick={fetchQuote}>Get Quote Using handler</button>
    </div>
  );
}
