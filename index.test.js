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

test("should say hi to Mother in arabic when requested", () => {
  expect(hiMom("", "ar-IQ")).toContain("يمه")
})


test("should throw error when requested", () => {
  expect(() => hiMom("", "")).toThrowError(/language/i);
});

test("should say to mom in russian", () => {
  expect(hiMom("", "ru")).toBe("Привет, мама!");
});

test("nl-Be should not say the same then nl-NL", () => {
  expect(hiMom("", "nl-BE")).not.toBe(hiMom("", "nl-NL"));
});

test("should say hi to mom in tamil when requested", () => {
  expect(hiMom("", "ta")).toContain("வணக்கம் அம்மா");
});
