/** @jest-environment jsdom */

/**
 * tests Login function
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import {MemoryRouter} from "react-router-dom";

import { act } from "react-dom/test-utils";

import { logger } from "../components/logger.js";
import { getUser, setUser } from "../data/mockData.js";

import Login from "../components/Login";

let container = null;

beforeEach(() => {
  // Set up DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("renders with or without a name",() => {
  act(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    ,container);
  })
})

describe('testing Login Page',() => {
  test('check table components', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
      ,container);
  })
})
