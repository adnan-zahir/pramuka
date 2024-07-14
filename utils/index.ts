export function replaceQuotes(text: string) {
  return text.replace(
    /\|\|\|(.*?)\|\|\|/g,
    "<quote class='custom-quote'>$1</quote>",
  );
}
