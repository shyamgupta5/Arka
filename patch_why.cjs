const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WhyArkamark.tsx', 'utf-8');

code = code.replace(
  "import { motion } from 'motion/react';",
  "import { motion, useScroll, useTransform } from 'motion/react';\nimport { useRef } from 'react';"
);

code = code.replace(
  "export default function WhyArkamark() {",
  "export default function WhyArkamark() {\n  const ref = useRef(null);\n  const { scrollYProgress } = useScroll({\n    target: ref,\n    offset: [\"start end\", \"end start\"]\n  });\n  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);\n  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);"
);

code = code.replace(
  '<section id="why-arkamark" className="bg-gray-50 dark:bg-[#2a2b30] text-gray-900 dark:text-white py-[100px] px-6 md:px-20 relative overflow-hidden group/section transition-colors duration-300">',
  '<section ref={ref} id="why-arkamark" className="bg-gray-50 dark:bg-[#2a2b30] text-gray-900 dark:text-white py-[100px] px-6 md:px-20 relative overflow-hidden group/section transition-colors duration-300">'
);

code = code.replace(
  '<div className="absolute top-20 right-[10%] w-32 h-32 bg-[#ffcc00]/20 rounded-full blur-[60px] md:blur-[80px] transition-transform duration-1000 group-hover/section:scale-150 group-hover/section:translate-x-10 group-hover/section:-translate-y-10" />',
  '<motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-32 h-32 bg-[#ffcc00]/20 rounded-full blur-[60px] md:blur-[80px] transition-transform duration-1000 group-hover/section:scale-150 group-hover/section:translate-x-10 group-hover/section:-translate-y-10" />'
);

code = code.replace(
  '<div className="absolute bottom-20 left-[10%] w-48 h-48 bg-[#a7c1d3]/10 dark:bg-[#a7c1d3]/20 rounded-full blur-[60px] md:blur-[100px] transition-transform duration-1000 group-hover/section:scale-125 group-hover/section:-translate-x-10 group-hover/section:translate-y-10" />',
  '<motion.div style={{ y: y2 }} className="absolute bottom-20 left-[10%] w-48 h-48 bg-[#a7c1d3]/10 dark:bg-[#a7c1d3]/20 rounded-full blur-[60px] md:blur-[100px] transition-transform duration-1000 group-hover/section:scale-125 group-hover/section:-translate-x-10 group-hover/section:translate-y-10" />'
);

fs.writeFileSync('src/components/sections/WhyArkamark.tsx', code);
