import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex-col items-center justify-center">
              <Divider />
              <div className="w-full flex gap-3 bg-default-100 p-6 text-sm">
                <div className="flex flex-col flex-1 text-left gap-1">
                  <span className="font-semibold text-base">
                    Gerakan Pramuka
                  </span>
                  <span>Graha Pancaka Putra</span>
                  <span>Gugus Depan 07-041</span>
                  <span>Graha Pancaka Putri</span>
                  <span>Gugus Depan 07-042</span>
                  <span>Basis SMKN 2 Bandung</span>
                </div>
                <div className="flex flex-col flex-1 text-right gap-1">
                  <span className="font-semibold text-base">
                    Informasi Kontak
                  </span>
                  <span>Instagram</span>
                  <span>@pramukasmkn2bandung</span>
                  <span>Email</span>
                  <span>grahapancaka@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-default-300 py-3">
                <div className="flex items-center gap-1 text-current">
                  <span className="text-default-600">Property of</span>
                  <p className="text-primary">Pramuka Graha Pancaka</p>
                </div>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">NextUI</p>
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
