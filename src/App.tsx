
import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ProductShowcase } from './components/ProductShowcase';
import { TargetAudience } from './components/TargetAudience';
import { Guide } from './components/Guide';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
            STEPLINK
          </div>
          <a
            href="https://blog.naver.com/imoim77"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            블로그 방문하기
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Philosophy />
        <ProductShowcase />
        <TargetAudience />
        <Guide />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
