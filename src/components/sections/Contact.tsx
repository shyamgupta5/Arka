import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Coffee, MapPin, Mail, Smartphone } from 'lucide-react';
import YellowSlash from '../YellowSlash';
import WhatsAppIcon from '../WhatsAppIcon';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  return (
    <section ref={ref} id="contact" className="bg-white dark:bg-[#2a2b30] text-black dark:text-white py-[100px] px-6 md:px-20 relative border-t border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
       {/* Decorative slash top right */}
       <motion.div style={{ y }} className="absolute top-0 right-10 w-12 h-auto hidden md:block z-0"><YellowSlash className="w-full h-auto" /></motion.div>
       
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6"
      >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#ffcc00] flex items-center justify-center mb-2 shadow-lg shadow-[#ffcc00]/20">
             <Coffee size={32} className="text-black ml-1 md:w-[36px] md:h-[36px]" />
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-4xl md:text-5xl font-extrabold tracking-tight">Say hello</motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light">Every meaningful experience begins with a conversation.</motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-black dark:text-white font-semibold text-base md:text-lg max-w-2xl leading-relaxed mt-2 transition-colors duration-300">
            Whether you have a brief to discuss, an idea to explore, or simply wish to connect over coffee, we'd love to hear from you.
          </motion.p>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
             href="https://wa.me/919711566659" 
             target="_blank" 
             rel="noreferrer"
             className="mt-6 bg-[#3fca5f] hover:bg-[#25D366] text-white font-bold py-3 px-8 rounded-lg flex items-center gap-3 transition-colors shadow-md"
          >
            <WhatsAppIcon size={22} className="text-white" />
            <span className="tracking-wide">Get in Touch</span>
          </motion.a>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-full bg-white dark:bg-[#1e1e24] rounded-xl shadow-2xl shadow-gray-200 dark:shadow-black/40 border border-gray-100 dark:border-gray-800 p-6 md:p-10 mt-10 md:mt-14 relative z-10 mx-auto max-w-3xl transition-colors duration-300">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 text-left">
               <div className="flex items-center gap-4">
                  <Smartphone size={26} className="flex-shrink-0 text-black dark:text-gray-300" />
                  <span className="font-bold text-base md:text-lg select-all">+91 9711566659</span>
               </div>
               <a href="mailto:hello@arkamark.in" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <Mail size={26} className="flex-shrink-0 text-black dark:text-gray-300" />
                  <span className="font-bold text-base md:text-lg select-all break-all sm:break-normal">hello@arkamark.in</span>
               </a>
               <div className="flex items-start gap-4 md:col-span-2">
                  <MapPin size={26} className="flex-shrink-0 mt-1 text-black dark:text-gray-300" />
                  <div className="flex-1">
                    <span className="font-bold text-base md:text-lg leading-relaxed">
                      Unit No. 130, First Floor, US Complex, Mathura Road,<br className="hidden md:block" /> Jasola, New Delhi - 110076
                    </span>
                  </div>
               </div>
            </div>
          </motion.div>
       </motion.div>
    </section>
  );
}
