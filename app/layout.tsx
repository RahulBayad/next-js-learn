import { Metadata } from "next";

// Apply on every page 
export const  metadata: Metadata = {
  title: {
    default: "ABC Enterprise",
    template: "%s | ABC Enterprise"
  }
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-red-500">Header</header>
        {children}
        <footer className="bg-green-500">Footer</footer>
      </body>
    </html>
  );
}
