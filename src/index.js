import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import StarRating from './StarRating2';
import App from './App-v2';

// function Test() {
//   const [rate, setRate] = useState(0)

//   return (
//     <div>
//       <StarRating color='green' onSetRating={setRate} />
//       <p>Rating {rate}</p>
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

