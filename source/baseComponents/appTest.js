const getAppTestCode = (redux) => {
  return `import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
${
  redux
    ? `import { Provider } from "react-redux";
import { store } from "../src/redux/store";`
    : ""
}
test('renders learn react link', () => {
  render( ${redux ? "<Provider store={store}>" : ""}
    <App />
    ${redux ? "</Provider>" : ""});
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
`;
};

export default getAppTestCode;
