import { hiMom } from "./index";

test("should say hi to mom", () => {
  console.log = jest.fn();
  hiMom();
  expect(console.log.mock.calls[0][0]).toBe("Hi, mom!");
});

test("should not say hi to dad", () => {
  console.log = jest.fn();
  hiMom();
  expect(console.log.mock.calls[0][0]).not.toBe("Hi, dad!");
});
