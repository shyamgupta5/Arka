import { motion } from 'motion/react';
import YellowSlash from '../YellowSlash';

import brandImg from '../../images/brand.png';
import eventImg from '../../images/event.png';
import brandActivationImg from '../../images/brand-activation.png';
import flagshipImg from '../../images/flagship.png';
import tradeshowImg from '../../images/tradeshow.png';
import institutionalImg from '../../images/institutional.png';
import experientialImg from '../../images/experiential.png';
import miceImg from '../../images/mice.png';
import digitalImg from '../../images/digital.png';

export default function Capabilities() {
  const cards = [
    {
      title: "Brand Experiences & Launches",
      description: "Immersive brand-led experiences designed to create visibility, engagement and lasting recall.",
      image: brandImg
    },
    {
      title: "Event Design & Production",
      description: "Immersive brand-led experiences designed to create visibility, engagement and lasting recall.",
      image: eventImg
    },
    {
      title: "Brand Activation & Creative Concepts",
      description: "Innovative concepts and activations crafted to spark engagement, drive participation, and bring brands to life.",
      image: brandActivationImg
    },
    {
      title: "Flagship Conferences & Summits",
      description: "Industry-defining platforms that convene leaders, ideas, and global conversations at scale.",
      image: flagshipImg
    },
    {
      title: "Trade Shows & Exhibitions",
      description: "Strategic showcase environments designed to maximize brand presence, interactions, networking and business outcomes.",
      image: tradeshowImg
    },
    {
      title: "Institutional & Government Engagements",
      description: "Structured, high-impact experiences tailored for public sector initiatives, govt. delegations, and global collaborations.",
      image: institutionalImg
    },
    {
      title: "Experiential Platforms & IP's",
      description: "Concept-driven properties built to engage audiences, develop communities, and scale into long-term ecosystems.",
      image: experientialImg
    },
    {
      title: "MICE",
      description: "Curated business experiences designed to engage stakeholders, strengthen relationships, and drive productive results.",
      image: miceImg
    },
    {
      title: "Digital Experiences",
      description: "Integrated digital and hybrid experiences - Connecting global audiences globally.",
      image: digitalImg
    }
  ];

  return (
    <section id="capabilities" className="bg-gray-50 dark:bg-[#1e1e24] text-gray-900 dark:text-white py-[100px] px-6 md:px-20 relative overflow-hidden transition-colors duration-300">
      {/* Decorative slash top right */}
      <YellowSlash className="absolute top-0 right-10 w-12 h-auto hidden md:block" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 md:mb-16 text-center md:text-left">
          What We Design<br className="hidden md:block" /> & Deliver
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
           {cards.map((card, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="flex flex-col group gap-4 p-4 -m-4 transition-all duration-300 hover:bg-white dark:hover:bg-[#2a2b30] hover:shadow-xl hover:shadow-black/5 rounded-xl hover:-translate-y-1 cursor-pointer"
             >
                <div className="overflow-hidden rounded-md shadow-sm relative">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-overlay" />
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-[220px] object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                </div>
                <h3 className="text-lg font-bold leading-snug mt-2 transition-colors duration-300 group-hover:text-[#ffcc00]">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.description}</p>
             </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
}
