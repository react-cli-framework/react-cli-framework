const getAppCode = () => {
  return `import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <code>React-cli-framework</code>
        </h1>
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
