import intlMom from "./lang/intlMom";

/**
 * Say hi to your mom blazingly fast!
 * @param motherName Mother's name
 * @param motherLang Language of your mother
 * @example
 * import { hiMom } from "hi-mom";
 * console.log(hiMom()); // Hi, mom!
 */
export function hiMom(
  motherName?: string,
  motherLang?: keyof typeof intlMom
): string;

/**
 * Say hi to multiple moms blazingly fast!
 * @param mother Your moms
 * @example
 * import { hiMoms } from "hi-mom";
 * console.log(hiMoms([
 *  { lang: "en" },
 *  { lang: "si" },
 * ]])); // Hi, mom! ආයුබෝවන්, අම්මේ!
 */
export function hiMoms(
  mothers: string | { name?: string, lang?: keyof typeof intlMom }[]
): string;