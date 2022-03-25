import { hiMom } from "./index";

test("should say hi to mom", () => {
  expect(hiMom()).toBe("Hi, mom!");
});

test("should not say hi to dad", () => {
  expect(hiMom()).not.toBe("Hi, dad!");
});

test("should say hi to Mother when requested", () => {
  expect(hiMom('Mother')).toBe("Hi, Mother!");
});
