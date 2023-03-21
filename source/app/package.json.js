const getPackageJsonCode = (
  name,
  project,
  redux,
  typescript,
  material,
  axios,
  testing
) => {
  const isNext = `"next": "^12.0.9"`;

  const isMaterial = `"@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/icons-material": "^5.11.9",
    "@mui/material": "^5.11.10",
    "@mui/styles": "^5.11.9"`;

  const isTypescript = `"typescript": "^4.4.4"`;
  const isTypeReact = `"@types/react": "^17.0.33",
    "@types/react-dom": "^17.0.11",
    "@types/material-ui": "^0.21.10"`;

  const isAxios = `"axios": "^0.24.0"`;
  const isTesting = `"@types/jest": "^26.0.24",
    "jest": "^27.0.6"`;

  const typeTesting = `"@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.1.9"`;

  const isRedux = `"react-redux": "^7.2.5",
    "redux": "^4.1.2"`;

  const reduxDevTools = `"redux-devtools-extension": "^2.13.9"`;

  return `{
  "name": "${name}",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    ${material ? isMaterial + "," : ""}
    ${axios ? isAxios + "," : ""}
    ${project === "NextJs App" ? isNext + "," : ""}
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    ${redux ? isRedux + "," : ""}
    ${typescript ? isTypescript : ""}
  },
  "devDependencies": {
    ${testing ? typeTesting + "," : ""}
    ${typescript ? isTypeReact + "," : ""}
    ${testing ? isTesting + "," : ""}
    ${redux ? reduxDevTools + "," : ""}
  }
}
`;
};
export default getPackageJsonCode;
