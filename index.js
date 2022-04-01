import intlMom from "./lang/intlMom.js";

export function hiMom(motherName, motherLang = "en") {
  if (!motherLang || !intlMom.hasOwnProperty(motherLang)) {
    throw new Error("Language not yet supported, but hi mom anyway!");
  }

  let re = /{{([\s\S]+)}}/;
  let greeting = intlMom[motherLang];
  let mom = greeting.match(re)[0].slice(2, -2);

  return greeting.replace(re, motherName || mom);
}

export function hiMoms(mothers) {
  if (typeof mothers == "string") {
    return hiMom(mothers);
  } else if (mothers instanceof Array) {
    return mothers.map(mother => hiMom(mother?.name, mother?.lang)).join(" ");
  }

  throw new Error("Mother type not supported, but hi mom anyway!");
}
