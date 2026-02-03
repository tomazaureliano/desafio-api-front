import './globals.css';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { Oxygen } from 'next/font/google';


const oxygen = Oxygen({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-oxygen'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${oxygen.variable} bg-black text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}