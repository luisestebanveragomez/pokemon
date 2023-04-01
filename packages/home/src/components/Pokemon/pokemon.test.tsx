import { fireEvent, render } from "@testing-library/react";
import { Pokemon } from "./Pokemon";

describe("SectionPokemon Component", () => {
  it("Should Render", () => {
    const { container } = render(
      <Pokemon name={"test"} id={12} textButton={""} handle={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Should Return Id", () => {
    const id = 123;
    let result;
    const handleEvent = (val: number) => (result = val);
    const { container } = render(
      <Pokemon name={"test"} id={id} textButton={""} handle={handleEvent} />
    );
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(result).toEqual(id);
  });
});
