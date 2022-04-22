import languages from "./languages/index";

/**
 * Say hi to your mom blazingly fast!
 * @param name Mother's name
 * @param language Language of your mother
 * @example
 * import { hiMom } from "hi-mom";
 * console.log(hiMom()); // Hi, mom!
 */
export function hiMom(
  name?: string,
  language: keyof typeof languages = "en"
): string;

/**
 * Say hi to multiple moms blazingly fast!
 * @param mothers Your moms
 * @example
 * import { hiMoms } from "hi-mom";
 * console.log(hiMoms([
 *  { lang: "en" },
 *  { lang: "si" },
 * ]])); // Hi, mom! ආයුබෝවන්, අම්මේ!
 */
export function hiMoms(
  mothers: string | { name?: string; lang?: keyof typeof languages }[]
): string;
