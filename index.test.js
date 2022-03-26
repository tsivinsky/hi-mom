import { hiMom } from "./index";

test("should say hi to mom", () => {
  expect(hiMom()).toBe("Hi, mom!");
});

test("should not say hi to dad", () => {
  expect(hiMom()).not.toBe("Hi, dad!");
});

test("should say hi to Mother when requested", () => {
  expect(hiMom("Mother")).toBe("Hi, Mother!");
});

test("should say hi to mom in german when requested", () => {
  expect(hiMom("", "de")).toContain("Hallo");
});

test("should say hi to Mother in french when requested", () => {
  expect(hiMom("Mother", "fr")).toContain("Mother");
});

test("should throw error when requested", () => {
  expect(() => hiMom("", "")).toThrowError(/language/i);
});
