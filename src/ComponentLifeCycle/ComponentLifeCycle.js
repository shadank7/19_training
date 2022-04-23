import { useState } from "react";
import "./ComponentLifeCycle.css";

export const ComponentLifeCycle = () => {
  const randomQuoteOftheDay = [
    "“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey",
    "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman",
    "“Do one thing every day that scares you.”― Eleanor Roosevelt",
    "“You can either experience the pain of discipline or the pain of regret. The choice is yours.”  – Unknown",
    "“Impossible is just an opinion.” – Paulo Coelho",
    "“Your passion is waiting for your courage to catch up.” – Isabelle Lafleche",
  ];
  const [quote, setQuote] = useState(randomQuoteOftheDay);
  return (
    <>
      <div>
        <h1>QUOTE OF THE DAY</h1>
        <blockquote className="quote">
          {quote.length > 0 ? (
            <strong onClick={() => setQuote([])}>
              <em>{quote[Math.floor(Math.random() * quote.length)]}</em>
            </strong>
          ) : (
            <button onClick={() => setQuote(randomQuoteOftheDay)}>
              Reload Quote of the day!
            </button>
          )}
        </blockquote>
      </div>
    </>
  );
};
