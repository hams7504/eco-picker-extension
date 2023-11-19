import React, { useEffect, useState } from 'react';
import './product.css'; // Import your CSS file
import vegetables from './vegetable_sustainability_ratings.json';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchDataAndParse();
  }, []);

  function fetchDataAndParse() {
    const filteredEntries = vegetables.map(entry => {
      if (entry.product_name.toLowerCase().includes('juice') && !entry.product_name.toLowerCase().includes('orange')) {
        return entry;
      } else {
        return null;
      }
    });
    const juiceEntries = filteredEntries.filter(entry => entry !== null);
    setResults(juiceEntries);
    console.log(juiceEntries);
  }

  function displayResults(results) {
    const limitedResults = results.slice(0, 5);
    const resultList = limitedResults.map(entry => <p key={entry.product_name}>{entry.product_name}</p>);

    return (
      <div>
        <h4 id="a4">Alternative Products</h4>
        {resultList}
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1 id="m1">Product-Specific Information</h1>
      </header>

      <div className="container">
        <img
          src="https://target.scene7.com/is/image/Target/GUEST_2b7f75ea-fbb8-4767-8b1f-6bb809bfe214?wid=1200&hei=1200&qlt=80&fmt=webp"
          alt="Image Placeholder"
        />
        <div className="content">
          <h2 id="m2">Product Information</h2>
          <br />
          <h3 id="m3">
            Product Name: Orange Juice
            <br />
            <br />
            Sustainability Rating: 36
          </h3>
          <br />
          <div id="output">{displayResults(results)}</div>
        </div>
      </div>

      {/* <button type="button" className="button1" id="hoverButton"><strong>Add Item!</strong></button> */}
      <span id="hoverText">To see how much your total carbon footprint is!</span>
    </div>
  );
}

export default App;
