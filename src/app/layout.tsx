import "./globals.css";
import manifest from "./manifest.json";

import { SidebarProvider } from "@/components/composites/sidebar";
import Sidebar from "@/components/containers/sidebar";
import Navbar from "@/components/containers/navbar";
import ThemeProvider from "@/components/containers/theme-provider"
import type { Metadata, Viewport  } from 'next';
import ServiceWorker from "@/components/containers/service-worker";
import Head from "next/head";


export const metadata: Metadata = {
  applicationName: manifest['name'],
  title: manifest['name'],
  description: manifest['description'],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: manifest['name'],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: manifest['name'],
    title: manifest['name'],
    description: manifest['description'],
    url: manifest['id'],
  },
  twitter: {
    card: "summary",
    title: manifest['name'],
    description: manifest['description'],
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#262626" },
    { media: "(prefers-color-scheme: light)", color: "#F5F5F5" }
  ],
}


const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <ServiceWorker />
      </Head>
      <body className="overflow-hidden">
        <ThemeProvider>
          <SidebarProvider>
            <Sidebar />
            <main className="size-full">
              <Navbar />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
