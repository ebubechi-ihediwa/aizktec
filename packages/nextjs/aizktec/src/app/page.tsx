'use client';

import Navbar from '@/components/navbar/Navbar';
import HomeContent from '@/components/home/HomeContent';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <div className="bg-black">
      <div className="bg-black text-white min-h-screen flex flex-col justify-between mx-auto max-w-4xl px-4">
        <Navbar />
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
}
