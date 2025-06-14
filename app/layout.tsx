import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thean Portfolio - Full Stack Developer',
  description: 'Portfolio website of Thean - Full Stack Developer specializing in React, Next.js, and modern web technologies',
  keywords: 'Full Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio',
  authors: [{ name: 'Thean' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/sivthean.png',
    apple: '/sivthean.png',
    shortcut: '/sivthean.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}