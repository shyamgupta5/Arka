import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import YellowSlash from '../YellowSlash';
import Logo from '../Logo';

export default function WhyArkamark() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section ref={ref} id="why-arkamark" className="bg-gray-50 dark:bg-[#2a2b30] text-gray-900 dark:text-white py-[100px] px-6 md:px-20 relative overflow-hidden group/section transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-32 h-32 bg-[#ffcc00]/20 rounded-full blur-[60px] md:blur-[80px] transition-transform duration-1000 group-hover/section:scale-150 group-hover/section:translate-x-10 group-hover/section:-translate-y-10" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[10%] w-48 h-48 bg-[#a7c1d3]/10 dark:bg-[#a7c1d3]/20 rounded-full blur-[60px] md:blur-[100px] transition-transform duration-1000 group-hover/section:scale-125 group-hover/section:-translate-x-10 group-hover/section:translate-y-10" />
      </div>
      
      {/* Decorative slash top left */}
      <YellowSlash className="absolute top-0 left-10 w-12 h-auto hidden md:block" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 mt-6 items-center"
      >
         <motion.div 
           variants={{
             hidden: { opacity: 0, y: 20 },
             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
           }}
           className="flex-1 flex items-center justify-center lg:justify-start w-full group cursor-default"
         >
             <div className="flex items-end flex-wrap sm:flex-nowrap justify-center lg:justify-start transition-transform duration-500 group-hover:-translate-y-2">
               <div className="leading-none flex flex-col gap-2 lg:gap-4 items-center lg:items-start text-center lg:text-left transition-transform duration-500 group-hover:scale-105 origin-left md:origin-center lg:origin-left">
                 <span className="text-5xl md:text-7xl font-black tracking-tighter transition-colors duration-500 group-hover:text-[#ffcc00] group-hover:drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]">WHY</span>
                 <Logo className="w-[160px] sm:w-[180px] md:w-[240px] h-auto drop-shadow-md transition-transform duration-500 text-black dark:text-white" />
               </div>
               <span className="text-[80px] md:text-[120px] font-black tracking-tighter leading-[0.7] text-gray-800 dark:text-white drop-shadow-md ml-2 relative sm:top-2 transition-all duration-500 delay-75 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#ffcc00] origin-bottom inline-block">?</span>
             </div>
         </motion.div>
         <motion.div 
           variants={{
             hidden: { opacity: 0, y: 20 },
             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
           }}
           className="flex-1 space-y-6 text-gray-700 dark:text-gray-300 text-lg md:text-[20px] leading-relaxed text-center lg:text-left w-full mt-4 lg:mt-0"
         >
            <p>
              At <strong className="text-black dark:text-white">ArkaMark</strong>, we design brand experiences that seamlessly blend creativity, strategy, and technology to deliver measurable impact with a strong focus on ROI.
            </p>
            <p>
              As an end-to-end experiential marketing agency, we partner with brands to create high-impact platforms, immersive engagements, and meaningful audience experiences designed to drive business outcomes.
            </p>
            <p>
              By closely aligning with our clients, their vision, and strategic objectives, we craft tailored solutions that shape perception, strengthen connections, and create lasting value.
            </p>
            <p className="text-[#2b597a] dark:text-[#a7c1d3] font-bold text-xl md:text-[22px] mt-6 md:mt-8 leading-snug">
              Let us help you in Designing Experiences<br className="hidden sm:block" /> That Leave a Mark!
            </p>
         </motion.div>
      </motion.div>
    </section>
  );
}
