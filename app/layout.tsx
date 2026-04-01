import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Manav Tech Labs',
    default: 'Website Design, Web Development, Mobile Apps, Digital Marketing and ERP Solutions | Manav Tech Labs',
  },
  description: 'Manav Tech Labs provides website design, web development, mobile app development, digital marketing, ERP solutions and lead generation services for growing businesses.',
  openGraph: {
    type: 'website',
    siteName: 'Manav Tech Labs',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030509] text-slate-100 font-body selection:bg-primary/30 min-h-screen flex flex-col relative overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
