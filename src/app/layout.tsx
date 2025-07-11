import "./globals.css";
import manifest from "./manifest.json";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import AppNavbar from "@/components/app-navbar";
import ThemeProvider from "@/components/theme-provider"
import type { Metadata, Viewport  } from 'next';
import ServiceWorker from "@/components/service-worker";
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
            <AppSidebar />
            <main className="size-full">
            <AppNavbar />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
