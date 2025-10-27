import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Korey Philpot | Revenue Leader & Builder',
  description: '5+ years building revenue engines and launching profitable business units from scratch. Currently VP of Sales & Operations seeking Head of Sales role at high-growth SaaS company.',
  keywords: 'sales leader, revenue growth, business development, 0-to-1, VP of Sales, Head of Sales, SaaS',
  authors: [{ name: 'Korey Philpot' }],
  openGraph: {
    title: 'Korey Philpot | Revenue Leader & Builder',
    description: '5+ years building revenue engines and launching profitable business units from scratch.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
