import React, { useState } from "react";

export default function CARD() {
  const [quote, setQuote] = useState({
    quote: "Click to get quote",
    author: ""
  });
  const api_url = "https://type.fit/api/quotes";
  let max = 10;
  let min = 0;

  const getapi = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    max = data.length - 1;

    let index = Math.floor(Math.random() * (max - min) + min);
    setQuote({
      quote: data[index].text,
      author: data[index].author
    });
  };
  const handleApi = () => {
    getapi(api_url);
  };

  return (
    <div className="card">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quote.quote}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{quote.author}</cite>
          </footer>
          <button type="button" className="btn btn-primary" onClick={handleApi}>
            New Quote
          </button>
        </blockquote>
      </div>
    </div>
  );
}
