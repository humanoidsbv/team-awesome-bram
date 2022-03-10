import { render, screen, fireEvent } from "@testing-library/react";

import { StoreProvider } from "../../../providers/storeProvider";

import { MenuButton } from "../MenuButton";

describe("Menu button toggle", () => {
  test("If button is pressed, toggleMenu gets called", () => {
    const toggleMenu = jest.fn();

    render(
      <StoreProvider>
        <MenuButton toggleMenu={toggleMenu} />
      </StoreProvider>,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(toggleMenu).toBeCalled();
  });
});
