import React, { useState, useEffect } from "react";
import { data } from "../../quotes";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let dataQuotes = data;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setQuote(randomQuote.frase);
    setAuthor(randomQuote.author);
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <wrapper id="quote-box">
      <div id="text">
        <h3>{quote}</h3>
      </div>
      <div id="author">
        <p>{author}</p>
      </div>
      <button id="new-quote" className="btn btn-primary" onClick={handleClick}>
        New Quote
      </button>
      <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
        Tweet Quote
      </a>
    </wrapper>
  );
}
