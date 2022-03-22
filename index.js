export function hiMom() {
  const language = window !== "undefined" ? window.navigator.language : "en-US";
  return language === "en-US"  ?  "Hi, mom!" : "Hi, mum!";
}
