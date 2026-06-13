import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Alqaswamarine
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-300 font-light">
            This domain is under Alqaswamarine
          </p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          
          {/* Status Badge */}
          <div className="inline-block px-6 py-2 bg-slate-700/50 border border-cyan-400/30 rounded-full">
            <span className="text-sm text-cyan-300">Currently Under Maintenance</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 text-center text-slate-500 text-sm">
        <p>© 2026 Alqaswamarine. All rights reserved.</p>
      </div>
    </div>
  );
}
