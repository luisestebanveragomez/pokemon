import { sendEventHelper } from "./sendEvent.helper";

describe("Send Event Helper", function () {
  it("Should Be Send Event", () => {
    let result;
    const event = {
      name: "test",
      val: { test: "123" },
    };
    window.addEventListener(
      event.name,
      ({ detail }: CustomEvent) => (result = detail)
    );
    sendEventHelper(event.name, event.val);
    expect(result.test).toEqual(event.val.test);
  });
});
