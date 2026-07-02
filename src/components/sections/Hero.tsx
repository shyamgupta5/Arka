import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import mhPinnacleImg from '../../images/mh-pinnacle.png';
import mhConferenceImg from '../../images/mh-conference.png';
import mhTuborgImg from '../../images/mh-tuborg.png';
import mhFintechImg from '../../images/mh-fintech.png';
import mhItiImg from '../../images/mh-iti.png';
import mhBbcImg from '../../images/mh-bbc.png';
import mhCalsbargImg from '../../images/mh-calsbarg.png';

const images = [
  mhPinnacleImg,
  mhConferenceImg,
  mhTuborgImg,
  mhFintechImg,
  mhItiImg,
  mhBbcImg,
  mhCalsbargImg,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[600px] md:h-[800px] lg:h-[88vh] min-h-[600px] bg-black overflow-hidden flex flex-col justify-end">
      {images.map((src, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all ease-out ${index === current ? 'opacity-100 scale-110 duration-[8000ms]' : 'opacity-0 scale-100 duration-1000'}`}
        >
          <img src={src} alt="Event Background" className="w-full h-full object-cover opacity-70" />
        </div>
      ))}
      <div className="absolute inset-0 border-b-8 border-[#333]"></div>
      
      {/* Decorative Yellow Slash */}
      <div className="absolute top-0 right-10 md:right-32 z-10 w-24 md:w-32 lg:w-48 opacity-90 hidden sm:block">
        <svg width="100%" height="auto" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.5476 0.00102982L73.343 -2.22225e-05L67.0422 5.6309L9.80982e-07 64.3492L51.5476 0.00102982Z" fill="url(#paint0_linear_2007_hero_40)"/>
          <defs>
            <linearGradient id="paint0_linear_2007_hero_40" x1="2.26895" y1="53.8831" x2="70.7449" y2="-3.65604" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE500"/>
              <stop offset="1" stopColor="#FFBF00"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Box */}
      <div 
        className="absolute bottom-0 left-0 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[calc(60%+70px)] xl:w-[calc(50%+70px)] h-[120px] sm:h-[140px] md:h-[180px] lg:h-[260px] z-10 bg-[#ffcc00]/80 backdrop-blur-md group" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
      >
         <div className="h-full flex flex-col justify-center pl-6 sm:pl-10 md:pl-16 lg:pl-20 pr-12 sm:pr-16 md:pr-20 lg:pr-24 pb-4 md:pb-6">
           <h1 className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[40px] font-black text-[#111] leading-[1.2] sm:leading-[1.15] md:leading-[1.12] lg:leading-[1.1] tracking-tight transition-transform duration-500 group-hover:translate-x-3 cursor-default">
             Designing Transformative{' '}<br className="hidden sm:block" />
             Brand Experiences That{' '}<br className="hidden sm:block" />
             Leave a Mark
           </h1>
         </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-10 sm:w-12 h-2 rounded-sm transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      <button 
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors z-20"
        onClick={() => setCurrent((prv) => (prv - 1 + images.length) % images.length)}
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
      </button>
      <button 
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors z-20"
        onClick={() => setCurrent((prv) => (prv + 1) % images.length)}
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" />
      </button>

    </section>
  );
}
