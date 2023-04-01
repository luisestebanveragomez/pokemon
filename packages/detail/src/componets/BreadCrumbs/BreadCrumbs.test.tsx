import { render } from "@testing-library/react";
import { BreadCrumbs } from "./BreadCrumbs";

describe("Bread Crumbs Component", () => {
  it("Should Be Render", () => {
    const { container } = render(
      <BreadCrumbs name={"test"} handle={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Should Be Render Value", () => {
    const { container } = render(
      <BreadCrumbs name={"test"} handle={() => {}} />
    );
    const el = document.querySelector("button");
    expect(el.textContent).toEqual("test");
  });
});
