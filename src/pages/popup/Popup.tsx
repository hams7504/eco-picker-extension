import React, { useEffect } from 'react';
// import fs from 'fs';
import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import axios from 'axios';
import * as cheerio from 'cheerio';
// import Brand from './brandInterface';
import brandsData from 'src/const/brand_sustainability_rankings.json';

// const url_address = 'https://www.target.com/p/general-mills-family-size-cocoa-puffs-cereal/-/A-89089910?preselect=81875680#lnk=sametab';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an HTTP GET request to the specified URL
        const response = await axios.get(window.location.toString());
        console.log(response.data);

        const $ = cheerio.load(response.data);
        const brand = $('meta[name="keywords"]').attr('content');

        //checking/matching if brand is in json

        for (const entry of brandsData) {
          console.log(entry);
          const name = entry.name;
          if (typeof name === 'string' && name.includes(brand)) {
            console.log(`Brand "${brand}" found in sector ${entry.sector}, ranking: ${entry.ranking}`);
          }
        }

        // const isPresent = jsonData.includes("General Mills");
        // console.log(isPresent)
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}>
      <header className="App-header" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme === 'light' && '#0281dc', marginBottom: '10px' }}>
          Learn React!
        </a>
        <button
          style={{
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#000' : '#fff',
          }}
          onClick={exampleThemeStorage.toggle}>
          Toggle theme
        </button>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occurred </div>);
