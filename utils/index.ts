export function replaceQuotes(text: string) {
  return text.replace(
    /\|\|\|(.*?)\|\|\|/g,
    "<quote class='custom-quote'>$1</quote>",
  );
}

export function convertDriveLink(beforeLink: string): string {
  // Define the regex pattern to match the file ID from the input link
  const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
  const match = beforeLink.match(regex);

  if (!match || match.length < 2) {
    throw new Error("Invalid Google Drive link");
  }

  const fileId = match[1];
  const convertedLink = `https://lh3.googleusercontent.com/d/${fileId}`;

  return convertedLink;
}
