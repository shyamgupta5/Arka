const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Contact.tsx', 'utf-8');

code = code.replace(
  "import { motion } from 'motion/react';",
  "import { motion, useScroll, useTransform } from 'motion/react';\nimport { useRef } from 'react';"
);

code = code.replace(
  "export default function Contact() {",
  "export default function Contact() {\n  const ref = useRef(null);\n  const { scrollYProgress } = useScroll({\n    target: ref,\n    offset: [\"start end\", \"end start\"]\n  });\n  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);"
);

code = code.replace(
  '<section id="contact" className="bg-white dark:bg-[#2a2b30] text-black dark:text-white py-[100px] px-6 md:px-20 relative border-t border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">',
  '<section ref={ref} id="contact" className="bg-white dark:bg-[#2a2b30] text-black dark:text-white py-[100px] px-6 md:px-20 relative border-t border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">'
);

code = code.replace(
  '<YellowSlash className="absolute top-0 right-10 w-12 h-auto hidden md:block" />',
  '<motion.div style={{ y }} className="absolute top-0 right-10 w-12 h-auto hidden md:block z-0"><YellowSlash className="w-full h-auto" /></motion.div>'
);

fs.writeFileSync('src/components/sections/Contact.tsx', code);
