import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  it("Should Render", () => {
    let { container } = render(
      <Select languages={[]} active={""} handle={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Should has two Elements", () => {
    let { container } = render(
      <Select languages={["es", "en"]} active={"en"} handle={() => {}} />
    );
    const lists = container.querySelectorAll("li");
    expect(lists.length).toBe(2);
  });

  it("Should be return value", () => {
    let lan = "";
    const changeLan = (el: string) => (lan = el);
    let { container } = render(
      <Select languages={["es", "en"]} active={"en"} handle={changeLan} />
    );
    const secondButton = container.querySelectorAll("button")[1];
    fireEvent.click(secondButton);
    expect(lan).toBe("en");
  });
});
