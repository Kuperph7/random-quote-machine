import { React, useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [quote, setQuote] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuote(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quote.length);
    setRandomQuote(quote[randomIndex]);
  };

  return (
    <div className="App" id="quote-box">
      <div className="App-header">
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title id="author">
              {randomQuote.author || "No author"}
            </Card.Title>
            <Card.Text id="text">
              {randomQuote ? (
                <>
                  <p className="random-text">&quot;{randomQuote.text}&quot;</p>
                </>
              ) : (
                <h2>Loading</h2>
              )}
            </Card.Text>
            <div className="buttons">
              <Button
                id="new-quote"
                variant="outline-primary"
                onClick={getNewQuote}
              >
                New Quote
              </Button>
              <a
                className="twitter"
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                target="_blank"
              >
                Twitter
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
