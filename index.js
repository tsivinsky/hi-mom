import languages from "./languages/index.js";

/**
 * A blazingly fast way to say hi to your mom!
 * @param {string} name - The mom name
 * @param {string} [language="en"] - The language
 * @example hiMom()
 * // "Hi, mom!"
 * @example hiMom("Kate")
 * // "Hi, Kate!"
 * @example hiMom("Maria", "pt")
 * // "Oi, Maria!"
 * @returns {string} A greeting to your mom in the informed language
 */
export function hiMom(name, language = "en") {
  if (!language || !languages.hasOwnProperty(language)) {
    throw new Error("Language not yet supported, but hi mom anyway!");
  }

  const regex = /\{{2}([^}]+)\}{2}/;
  const greeting = languages[language];
  const localeName = greeting.split(regex)[1];

  return greeting.replace(regex, name || localeName);
}

export function hiMoms(mothers) {
  if (typeof mothers == "string") {
    return hiMom(mothers);
  } else if (mothers instanceof Array) {
    return mothers.map((mother) => hiMom(mother?.name, mother?.lang)).join(" ");
  }

  throw new Error("Mother type not supported, but hi mom anyway!");
}
