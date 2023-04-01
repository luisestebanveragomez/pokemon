import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useNavigate: () => (key: string) => key,
}));

describe("Header", () => {
  it("Should Render", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("Should Be Show Sub Menu Language", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
    const button = screen.getByLabelText("Change Language");
    const logo = container.querySelector(".header__sectionImg-button");
    const icon = button.querySelector(".header__changeLanguage-arrow");
    fireEvent.click(button);
    fireEvent.click(logo);
    expect(icon.classList.contains("active")).toBeTruthy();
  });
});
