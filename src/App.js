import React, { useState, useEffect } from 'react';
import './App.css';
import styles from './App.css';
import fetchData from './price';

function App() {

  const [responseData, setResponseData] = useState()

  const fetchDataAndSetState = async () => {
    try {
      const data = await fetchData();
      const result = data.filter((element) => element.id === 'bitcoin');
      setResponseData(result);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataAndSetState();
    }, 10000);
    return () => clearInterval(interval);
  }
  )
  return (
    <div className="App">
      <h1>Price on exchanges</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "1rem"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          marginRight: "0.5rem"
        }}>
          <div><a href="">Bitfinex - Value</a></div>
          <div><a href="">Coinbase Pro - Value</a></div>
          <div><a href="">Bitstamp - Value</a></div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          marginRight: "0.5rem"
        }}>
          <div><a href="">Gemini - Value</a></div>
          <div><a href="">Kraken - Value</a></div>
          <div><a href="">HitBTC - Value</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
