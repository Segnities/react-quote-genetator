import React from "react";
import { useState, useEffect } from "react";

import QuoteService from "../API/QuoteService";

import { useFetching } from "../hooks/useFetching";

import "../styles/App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [fetchAdvice, isLoading, adviceError] = useFetching(async () => {
    const response = await QuoteService.getQuote();
    setAdvice(response.data.slip.advice);
  });

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1 className="card-header">{advice}</h1>
        <button className="btn" onClick={fetchAdvice}>
          <span>GIVE ADICE, I NEED YOUR WISDOM!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
