import React, { useEffect } from 'react';
import './brand.css'; // Import your CSS file

const Brands = () => {
  useEffect(() => {
    // This code will be executed after the component is mounted
    // Get the targetbtnButton element by its ID
    var targetbtnButton = document.getElementById('targetbtn');

    // Add a click event listener to the targetbtnButton button
    targetbtnButton.addEventListener('click', function () {
      // Redirect to another page when the button is clicked
      window.location.href = 'goods';
    });

    // Cleanup the event listener when the component is unmounted
    return () => {
      targetbtnButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brands</title>
        <link rel="stylesheet" href="brand.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" />
      </head>
      <body id="brand">
        <h1 id="brandh1">
          <strong>Stores</strong>
        </h1>
        <div className="storep1">
          <img
            id="targetb1"
            src="https://purepng.com/public/uploads/large/purepng.com-target-logologobrand-logoiconslogos-251519939151pkaty.png"
            alt="Target Image"
            className="cropped-img"
          />
          <img
            id="sephorab1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sephora_logo.svg/2560px-Sephora_logo.svg.png"
            alt="Sephora Image"
            className="cropped-img"
          />
          <img
            id="starmarketb1"
            src="https://assets.stickpng.com/images/62fe5260f31142d937b30c60.png"
            alt="Star Market Image"
            className="cropped-img"
          />
        </div>
        <script src="brand.js"></script>
        <div className="store1btn">
          <button id="targetbtn">Target</button>
          <button id="sephorabtn">Sephora</button>
          <button id="starbtn">Star Market</button>
        </div>

        <div className="storep2">
          <img
            id="wayfairb1"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Wayfair_logo_with_tagline.png"
            alt="Wayfair Image"
            className="cropped-img"
          />
          <img
            id="sheinb1"
            src="https://assets.stickpng.com/images/5f49225f68ecc70004ae7049.png"
            alt="Shein Image"
            className="cropped-img"
          />
          <img
            id="pepsicob1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/2500px-PepsiCo_logo.svg.png"
            alt="Pepsico Image"
            className="cropped-img"
          />
        </div>
        <div className="store2btn">
          <button id="wayfairbtn">Wayfair</button>
          <button id="sheinbtn">Shein</button>
          <button id="pepsicobtn">PepsiCo</button>
        </div>
      </body>
    </html>
  );
};

export default Brands;
