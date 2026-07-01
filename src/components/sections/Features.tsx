import { Handshake, Users, Coins, Lightbulb, Clock, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';
import YellowSlash from '../YellowSlash';

export default function Features() {
  const icons = [
    { icon: Handshake, label: "Reliable\npartner", color: "text-blue-500 dark:text-blue-200" },
    { icon: Users, label: "Passionate\nteam", color: "text-green-500 dark:text-green-300" },
    { icon: Coins, label: "Cost-effective\ncampaigns", color: "text-pink-500 dark:text-pink-300" },
    { icon: Lightbulb, label: "Wow Evoking\nConcepts", color: "text-red-500 dark:text-red-300" },
    { icon: Clock, label: "11th hour\ncompanion", color: "text-purple-500 dark:text-purple-300" },
    { icon: BrainCircuit, label: "Deep Industry\nKnowledge", color: "text-yellow-600 dark:text-yellow-400" },
  ];

  return (
    <section className="bg-white dark:bg-[#1e1e24] text-gray-900 dark:text-white py-[100px] px-6 md:px-20 relative overflow-hidden border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      {/* Decorative slash top left */}
      <YellowSlash className="absolute top-0 left-10 w-12 h-auto" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mt-6"
      >
        <div className="flex-1 space-y-12 w-full">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-xl">
            If the experience doesn't leave a mark, it isn't ArkaMark...
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {icons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="group flex flex-col items-start gap-4 p-5 -m-5 rounded-2xl transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-white dark:hover:bg-[#2a2b30] cursor-default border border-transparent hover:border-gray-100 dark:hover:border-[#333]"
                >
                  <div className={`p-0 ${item.color} transition-transform duration-400 ease-out group-hover:scale-110 origin-left group-hover:drop-shadow-sm`}>
                    <Icon size={44} strokeWidth={1.5} />
                  </div>
                  <p className="whitespace-pre-line text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 transition-colors duration-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center py-10 lg:pl-16 xl:pl-20 w-full overflow-hidden sm:overflow-visible">
           <div className="relative flex items-center max-w-[500px] scale-[0.65] sm:scale-80 md:scale-100 origin-center">
             
             {/* Center Box Icon */}
             <div className="z-10 flex-shrink-0">
               <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect width="140" height="140" rx="39.2" fill="currentColor" className="text-gray-900 dark:text-[#14142C]"/>
                 <rect x="1.68" y="1.68" width="136.64" height="136.64" rx="37.52" stroke="currentColor" className="text-gray-300 dark:text-white" strokeOpacity="0.3" strokeWidth="3.36"/>
                 <path d="M94.1577 38.107L115.953 38.1059L109.652 43.7369L42.6101 102.455L94.1577 38.107Z" fill="url(#paint0_linear_ax_icon)"/>
                 <path d="M68.7921 91.9929L57.4062 59.9425L42.4875 102.496H23.6724L47.1456 38.105H67.7874L91.1693 102.496H72.2628L68.7921 91.9929Z" fill="white"/>
                 <defs>
                   <linearGradient id="paint0_linear_ax_icon" x1="44.879" y1="91.989" x2="113.355" y2="34.4499" gradientUnits="userSpaceOnUse">
                     <stop stopColor="#FFE500"/>
                     <stop offset="1" stopColor="#FFBF00"/>
                   </linearGradient>
                 </defs>
               </svg>
             </div>
             
             {/* Connections */}
             <div className="h-[280px] w-[60px] xl:w-[80px] relative z-0 flex-shrink-0">
               <svg viewBox="0 0 80 280" preserveAspectRatio="none" className="w-full h-full text-gray-300 dark:text-[#666]" style={{stroke: 'currentColor', strokeWidth: '3', fill: 'none', strokeLinecap: 'round'}}>
                 <path d="M0 140 L80 40" />
                 <path d="M0 140 L80 140" />
                 <path d="M0 140 L80 240" />
               </svg>
             </div>

             {/* Right Labels */}
             <div className="relative h-[280px] flex flex-col justify-between z-10 w-64 md:w-56 lg:w-64">
                <div className="absolute top-[40px] -translate-y-1/2 flex items-center gap-4 -ml-[10px]">
                    <div className="w-5 h-5 rounded-full bg-[#ffcc00] flex-shrink-0"></div>
                    <h3 className="text-[26px] xl:text-3xl font-extrabold leading-tight tracking-wide">Experiential<br/>Strategy</h3>
                </div>
                <div className="absolute top-[140px] -translate-y-1/2 flex items-center gap-4 -ml-[10px]">
                    <div className="w-5 h-5 rounded-full bg-[#ffcc00] flex-shrink-0"></div>
                    <h3 className="text-[26px] xl:text-3xl font-extrabold leading-tight tracking-wide">Experience<br/>Design</h3>
                </div>
                <div className="absolute top-[240px] -translate-y-1/2 flex items-center gap-4 -ml-[10px]">
                    <div className="w-5 h-5 rounded-full bg-[#ffcc00] flex-shrink-0"></div>
                    <h3 className="text-[26px] xl:text-3xl font-extrabold leading-tight tracking-wide">Execution</h3>
                </div>
             </div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
