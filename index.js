import intlMom from "./lang/intlMom.js";

export function hiMom(motherName, motherLang = "en") {
  if (!motherLang || !intlMom.hasOwnProperty(motherLang)) {
    throw new Error("Language not yet supported, but hi mom anyway!");
  }

  const regex = /\{{2}([^}]+)\}{2}/;
  const greeting = intlMom[motherLang];
  const momName = greeting.split(regex)[1];

  return greeting.replace(regex, motherName || momName);
}

export function hiMoms(mothers) {
  if (typeof mothers == "string") {
    return hiMom(mothers);
  } else if (mothers instanceof Array) {
    return mothers.map(mother => hiMom(mother?.name, mother?.lang)).join(" ");
  }

  throw new Error("Mother type not supported, but hi mom anyway!");
}