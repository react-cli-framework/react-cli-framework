const getPackageJsonCode = (name, redux, typescript, material, axios) => {
  return `{
  "name": "${name}",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    ${
      material
        ? `"@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/icons-material": "^5.11.11",
    "@mui/material": "^5.11.14",`
        : ""
    }
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
   ${
     typescript
       ? `"@types/jest": "^27.5.2",
    "@types/node": "^16.18.18",
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "typescript": "^4.9.5",`
       : ""
   }
   ${axios ? `"axios": "^1.3.4",` : ""}
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    ${
      redux
        ? `"redux": "^4.2.1",
    "react-redux": "^8.0.5",`
        : ""
    }
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`;
};
export default getPackageJsonCode;
