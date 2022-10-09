import React from "react";
import { useState, useEffect } from "react";

import QuoteService from "../API/QuoteService";

import { useFetching } from "../hooks/useFetching";

import "../styles/App.css";
import Loader from "./UI/Loaders/Loader";

function App() {
  const [advice, setAdvice] = useState("");
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [fetchAdvice, isAdviceLoading, adviceError] = useFetching(async () => {
    const response = await QuoteService.getQuote();
    setAdvice(response.data.slip.advice);
  });

  useEffect(() => {
    setPageIsLoading(false);
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        {isAdviceLoading ? (
          <Loader />
        ) : (
          <>
            <h1 className="card-header">{advice}</h1>
            <button className="btn" onClick={fetchAdvice}>
              <span>GIVE ADICE, I NEED YOUR WISDOM!</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
