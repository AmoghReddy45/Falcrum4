import { Inter } from 'next/font/google';
import '../common/style/globals.css';
import Navbar from '@/common/component/navbar/Navbar';
import Footer from '@/common/module/Footer';
import { Providers } from '@/common/component/element/Providers';
/* eslint-disable */

// Initialize Inter font (adjust options as needed)
const interFont = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://fulcrum4.io'),
  title: 'Falcrum^4',
  description: 'Igniting Innovation, Engineering Futures',
  openGraph: {
    title: 'Falcrum^4',
    description: 'Igniting Innovation, Engineering Futures',
    url: 'https://fulcrum4.io',
    siteName: 'Falcrum^4',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Falcrum^4 - Igniting Innovation, Engineering Futures',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falcrum^4',
    description: 'Igniting Innovation, Engineering Futures',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.className} max-w-[95vw]`}>
        <Providers>
          <div className='flex justify-center items-center'>
            <Navbar />
          </div>
          <div className='w-screen overflow-x-clip'>
            {children}
          </div>
          <div className='flex justify-center items-center'>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
