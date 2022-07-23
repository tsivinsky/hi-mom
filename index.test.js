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

test("should say hi to mom in tamil when requested", () => {
  expect(hiMom("", "ta")).toContain("வணக்கம் அம்மா");
});

test("should say hi to mom in german when requested", () => {
  expect(hiMom("", "de")).toContain("Hallo");
});

test("should say hi to mom in danish when requested", () => {
  expect(hiMom("", "da")).toContain("Hej");
});

test("should say hi to mom in russian when requested", () => {
  expect(hiMom("", "ru")).toBe("Привет, мама!");
});

test("should say hi to mom in persian when requested", () => {
  expect(hiMom("", "fa")).toContain("مامان");
});

test("should say hi to Mother in french when requested", () => {
  expect(hiMom("Mother", "fr")).toContain("Mother");
});

test("should say hi to Mother in arabic when requested", () => {
  expect(hiMom("", "ar-IQ")).toContain("يمه");
});

test("should say hi to Mother in darija (Moroccan Arabic) when requested", () => {
  expect(hiMom("", "ar-MA")).toContain("ماما");
});

test("nl-Be should not say the same as nl-NL when requested", () => {
  expect(hiMom("", "nl-BE")).not.toBe(hiMom("", "nl-NL"));
});

test("should say hi to Mother in assamese when requested", () => {
  expect(hiMom("", "as")).toContain("অ' মা");
});

test("should say hi to mom in pirate speak when requested", () => {
  expect(hiMom("", "en-PT")).toContain("Ahoy,");
});

test("should say hi to Mother in azerbaijani when requested", () => {
  expect(hiMom("", "az")).toBe("Salam, ana!");
});

test("should say hi to Mother in Swedish and not Bork Bork!", () => {
  expect(hiMom("", "se")).toBe("Hej, mamma!");
});

test("should say hi to Mother in Norwegian Bokmål when requested", () => {
  expect(hiMom("", "no-NB")).toBe("Hei, mamma!");
});

test("should say hi to Mother in Norwegian Nynorsk when requested", () => {
  expect(hiMom("", "no-NN")).toBe("Hei, mamma!");
});

test("should say hi to Mother in Croatian when requested", () => {
  expect(hiMom("", "hr")).toBe("Bok, mama!");
});

test("should say hi to Mother in Filipino when requested", () => {
  expect(hiMom("", "tl")).toBe("Kamusta po, nanay!");
});

test("should throw error when requested", () => {
  expect(() => hiMom("", "")).toThrowError(/language/i);
});
