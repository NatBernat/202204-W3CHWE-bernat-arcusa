import ButtonComponent from "./ButtonComponent.js";

describe("Given ButtonComponent", () => {
  const myMock = jest.fn();
  let container;
  let testClass;
  let testText;
  beforeEach(() => {
    container = document.createElement("div");
    testClass = "button";
    testText = "send";
  });
  describe("When it's instantiated", () => {
    test("Then it should render a button in the div container", () => {
      new ButtonComponent(container, testClass, testText, myMock);
      const expectedButton = container.querySelector("button");

      expect(expectedButton).not.toBeNull();
    });

    test("Then it should render a button with button className", () => {
      new ButtonComponent(container, testClass, testText, myMock);
      const expectedButton = container.querySelector("button");

      expect(expectedButton.className).toBe(testClass);
    });
  });
});
