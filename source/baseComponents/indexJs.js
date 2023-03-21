const getIndexJsCode = (redux) => {
  return `import React from 'react';
 ${redux ? `import Provider from "react/redux"` : ""}
  ${redux ? `import {store} from "../redux-store/store"` : ""}

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 ${redux ? "<Provider store={store}>" : ""}
    <App />
    ${redux ? "</Provider>" : ""}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`;
};

export default getIndexJsCode;
