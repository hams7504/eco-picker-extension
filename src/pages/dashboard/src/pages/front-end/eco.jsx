import React, { useEffect } from 'react';
import './eco_style.css'; // Import your CSS file
import logo from './eco_logo.svg';

const EcoPickExtension = () => {
  useEffect(() => {
    // This code will be executed after the component is mounted
    // Get the explore button by its ID
    var exploreButton = document.getElementById('explore');

    // Add a click event listener to the explore button
    exploreButton.addEventListener('click', function () {
      // Redirect to another page when the button is clicked
      window.location.href = 'brand';
    });

    // Cleanup the event listener when the component is unmounted
    return () => {
      exploreButton.removeEventListener('click', () => {});
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eco-Pick Chrome Extension</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" />
        <link rel="stylesheet" href="eco_style.css" />
      </head>
      <body>
        <img id="logo" src={logo} alt="Eco Logo" />
        <h1>
          <strong>Welcome to Eco-Pick</strong>
        </h1>
        <a href="http://localhost:3000/tracker">
          <button id="signin">Open the Carbon Footprint tracker!</button>
        </a>
        <p>
          Eco-Pick is a Chrome extension empowering users to make eco-friendly choices by providing alternative,
          sustainable options.
        </p>
        <button id="explore">Explore Now</button>
        <script src="eco.js"></script>
        <div className="container">
          <img
            id="target"
            src="https://purepng.com/public/uploads/large/purepng.com-target-logologobrand-logoiconslogos-251519939151pkaty.png"
            alt="Target Image"
            className="cropped-img"
          />
          <img
            id="sephora"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sephora_logo.svg/2560px-Sephora_logo.svg.png"
            alt="Sephora Image"
            className="cropped-img"
          />
          <img
            id="starmarket"
            src="https://assets.stickpng.com/images/62fe5260f31142d937b30c60.png"
            alt="Star Market Image"
            className="cropped-img"
          />
        </div>
      </body>
    </html>
  );
};

export default EcoPickExtension;
