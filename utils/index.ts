import { siteConfig } from "@/config/site";
import { EmailFormData, WhatsappFormData } from "@/types";

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

export function createMailtoLink({
  name,
  subject,
  text,
}: EmailFormData): string {
  const email = siteConfig.socials.whatsapp;
  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(`${name}\n\n${text}\n\n`);

  return `mailto:${email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
}

export function createWhatsappLink({ name, text }: WhatsappFormData): string {
  const whatsapp = siteConfig.socials.whatsapp;
  const bodyEncoded = encodeURIComponent(`| ${name} | \n\n${text}`);

  return `https://wa.me/${whatsapp}?text=${bodyEncoded}`;
}

export function formatPhoneNumber(phoneNumber: string) {
  // Remove non-digit characters if any
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Extract the country code, first part, middle part, and last part
  const countryCode = cleaned.slice(0, 2);
  const part1 = cleaned.slice(2, 5);
  const part2 = cleaned.slice(5, 9);
  const part3 = cleaned.slice(9);

  // Format the phone number
  return `(+${countryCode}) ${part1}-${part2}-${part3}`;
}
