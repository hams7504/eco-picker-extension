import React, { useEffect } from 'react';
import './goods.css'; // Import your CSS file

const TargetProducts = () => {
  useEffect(() => {
    // This code will be executed after the component is mounted
    // Get the orangejbtn element by its ID
    var orangejbtn = document.getElementById('orangejbtn');

    // Add a click event listener to the orangejbtn button
    orangejbtn.addEventListener('click', function () {
      // Redirect to another site when the button is clicked
      window.location.href = 'product_demo';
    });

    // Cleanup the event listener when the component is unmounted
    return () => {
      orangejbtn.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Products of Target</title>
        <link rel="stylesheet" href="goods.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" />
      </head>
      <body id="goods">
        <h1 id="goodsh1">
          <strong>Products of Target</strong>
        </h1>
        <div className="product-containter">
          <div className="product">
            <img
              id="nvgranola1"
              src="https://www.naturevalley.com/_next/image?url=https%3A%2F%2Fnvuscmsprod.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F04%2FNV-chocolate-crunchy-dipped-granola-square.png&w=1080&q=75"
              alt="granola Image"
              className="cropped-img"
            />
            <img
              id="orangej"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIldpaJx4XvSXovgzht15NjIDhSJCFtDFwmA&usqp=CAU"
              alt="Orange Juice Image"
              className="cropped-img"
            />
          </div>
          <div className="info">
            <p1 id="nv">Nature's Valley Crunchy Dipped Chocolate - 6ct/4.68oz</p1>
            <p2 id="oj">Simply Orange Pulp Free Juice - 11.5 fl oz</p2>
          </div>
          <div className="button">
            <button id="nvgranolabtn">About this item</button>
            <button id="orangejbtn">About this item</button>
          </div>
        </div>
        <script src="goods.js"></script>
        <div className="an-product-containter">
          <div className="an-product">
            <img
              id="chicken"
              src="https://images.albertsons-media.com/is/image/ABS/970020926?$ng-ecom-pdp-desktop$&defaultImage=Not_Available"
              alt="Chicken Image"
              className="cropped-img"
            />
            <img
              id="potato"
              src="https://images.albertsons-media.com/is/image/ABS/960077776?$ng-ecom-pdp-desktop$&defaultImage=Not_Available"
              alt="Potato Image"
              className="cropped-img"
            />
          </div>
          <div className="an-info">
            <p>Open Nature Chicken Breasts Boneless Skinless Air Chilled Value Pack - 3.00 Lb</p>
            <p>Signature Select/Farms Idaho Russet Potatoes - 5 Lb</p>
          </div>
          <div className="an-button">
            <button id="chickenbtn">About this item</button>
            <button id="potatobtn">About this item</button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default TargetProducts;
