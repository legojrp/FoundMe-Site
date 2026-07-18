import React from 'react';

export default function App() {
  const appStoreUrl = ""; // Replace with your actual App Store URL
  const contactEmail = "foundme@patchindustries.com"; 

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-zinc-100 font-sans flex flex-col justify-between p-6 md:p-12 lg:p-16 antialiased selection:bg-zinc-800 selection:text-white">
      
      {/* HEADER / TOP NAV */}
      <header className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-3 py-1">
          v1.0.0
        </span>
      </header>

      {/* MAIN HERO CONTENT */}
      <main className="w-full max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center py-12 lg:py-0">
        
        {/* LEFT COLUMN: TEXT & CTAs */}
        <div className="flex flex-col items-start space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-none">
              FoundMe.
            </h1>
            <div className="flex items-center gap-4 text-lg md:text-xl font-medium tracking-tight text-zinc-500">
              <span className="w-8 h-[1px] bg-zinc-700" />
              <h2>Lock screen recovery</h2>
            </div>
          </div>

          <p className="text-base md:text-lg text-zinc-400 font-normal max-w-md leading-relaxed tracking-wide">
            Turn your iOS lock screen into a secure recovery hub. Place native 
            contact cards and hands-free Siri voice bypass scripts directly 
            onto your locked device—ensuring it always finds its way home 
            without exposing your passcode.
          </p>

          {/* ACTION BUTTONS (Grouped Together) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {appStoreUrl ? (
              <a 
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-[#09090b] bg-white transition-colors hover:bg-zinc-300"
              >
                Download on App Store
              </a>
            ) : (
              <div className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-zinc-500 bg-zinc-900 border border-zinc-800 cursor-not-allowed">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Coming Soon
                </span>
              </div>
            )}

            {/* GET IN TOUCH - Prominent Secondary Button */}
            <a 
              href={`mailto:${contactEmail}?subject=FoundMe%20Inquiry`}
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 transition-all duration-200"
            >
              Get in Touch
              <svg 
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: APP SCREENSHOTS */}
        <div className="relative w-full flex justify-center lg:justify-end items-center gap-4 sm:gap-6 mt-4 lg:mt-0">
          
          {/* Screenshot 1 (Scaled down to precise iPhone 17 Pro Max curve) */}
          <div className="relative w-[40%] max-w-[200px] aspect-[1320/2868] bg-zinc-900 border border-zinc-800 rounded-[24px] overflow-hidden shadow-2xl flex items-center justify-center">
            
            <img 
              src="/screenshot-1.png" 
              alt="FoundMe App Lock Screen" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
          </div>

          {/* Screenshot 2 (Staggered) */}
          <div className="relative w-[40%] max-w-[200px] aspect-[1320/2868] bg-zinc-900 border border-zinc-800 rounded-[24px] overflow-hidden shadow-2xl flex items-center justify-center mt-12 md:mt-16">
            
            <img 
              src="/screenshot-2.png" 
              alt="FoundMe App Interface" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
          </div>
          
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full flex justify-between items-center border-t border-zinc-900 pt-8 mt-8">
        <p className="text-sm text-zinc-600 font-medium w-full text-center md:text-left">
          &copy; {new Date().getFullYear()} John Patch. All rights reserved.
        </p>
      </footer>

    </div>
  );
}