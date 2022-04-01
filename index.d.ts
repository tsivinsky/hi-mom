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
