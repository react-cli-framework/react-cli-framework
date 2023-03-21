const getTestingCode = (name) => {
  return `/**
 * @jest-environment jsdom
 */
/* eslint-disable jest/valid-title */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jest/expect-expect */

import ${name} from "./${name}";
import "@testing-library/jest-dom";
import { test } from "@jest/globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Test for component", () => {
    test("Initial test, async", async () => {
        render(
                <${name} />
        );
        const support = screen.getByTestId("test")
        expect(support).toBeInTheDocument();
    })
})`;
};

export default getTestingCode;
