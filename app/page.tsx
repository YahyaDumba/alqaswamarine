import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Products />
      <Footer />
      
      {/* Floating Chat/Contact Button */}
      <div className="fixed bottom-6 right-6 flex items-center space-x-3 z-50">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-gray-100 hidden sm:block">
          Contact us
        </div>
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </main>
  );
}
