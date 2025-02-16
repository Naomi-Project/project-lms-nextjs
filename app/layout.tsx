import { Toaster } from "@/components/ui/sonner";
import CustomApolloProvider from "@/lib/ApolloProvider";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SMP Yapendik Dashboard",
  description: "A comprehensive dashboard for school management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CustomApolloProvider>
          {children}
          <Toaster />
        </CustomApolloProvider>
      </body>
    </html>
  );
}
