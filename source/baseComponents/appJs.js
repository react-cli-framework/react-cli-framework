const getAppCode = (redux) => {
  return `import React from 'react';
  ${
    redux
      ? `import { incrementCount, decrementCount, resetCount } from "./redux/actions"
     import {useSelector , useDispatch} from "react-redux"
    `
      : ""
  }
import './App.css';

const App = () => {
   ${
     redux
       ? `const dispatch = useDispatch()
         const count = useSelector(({count}) => count)
    `
       : ""
   }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <code>React-cli-framework</code>
        </h1>
        ${
          redux
            ? ` <h1>{count}</h1>
        <div
          style={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => {
              dispatch(incrementCount());
            }}
          >
            INCREMENT
          </button>
          <button
            onClick={() => {
              dispatch(resetCount());
            }}
          >
            RESET
          </button>
          <button
            onClick={() => {
              dispatch(decrementCount());
            }}
            disabled={count === 0}
          >
            DECREMENT
          </button>
        </div>
`
            : ""
        }
         <h3>
         Here we are providing end-to-end solution for your react app
        </h3>
        <a
          className="App-link"
          href="https://www.npmjs.com/package/react-cli-framework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about us
        </a>
      </header>
    </div>
  );
}

export default App;
`;
};

export default getAppCode;
