import { setStyleElementHelper } from "./setStyleElement.helper";

describe("Set Style Element", () => {
  it("Should return min number", () => {
    setStyleElementHelper("body", "background", "green");
    const body = document.querySelector("body");
    expect(body.getAttribute("style")).toEqual("background: green;");
  });
});
