const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  "import { useState, useEffect } from 'react';",
  "import { useState, useEffect, useRef } from 'react';\nimport { motion, useScroll, useTransform } from 'motion/react';"
);

code = code.replace(
  "export default function Hero() {",
  "export default function Hero() {\n  const ref = useRef(null);\n  const { scrollYProgress } = useScroll({\n    target: ref,\n    offset: [\"start start\", \"end start\"]\n  });\n  const y = useTransform(scrollYProgress, [0, 1], [\"0%\", \"30%\"]);"
);

code = code.replace(
  '<section id="home" className="relative w-full h-[600px] md:h-[800px] lg:h-[88vh] min-h-[600px] bg-black overflow-hidden flex flex-col justify-end">',
  '<section ref={ref} id="home" className="relative w-full h-[600px] md:h-[800px] lg:h-[88vh] min-h-[600px] bg-black overflow-hidden flex flex-col justify-end">'
);

code = code.replace(
  /<div \s*key={index} \s*className={`absolute inset-0 transition-opacity duration-\[1500ms\] ease-in-out \${index === current \? 'opacity-100 z-10' : 'opacity-0 z-0'}`}\s*>/g,
  '<motion.div key={index} style={{ y }} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === current ? \'opacity-100 z-10\' : \'opacity-0 z-0\'}`}>'
);

code = code.replace(
  /<\/div>\s*{\/\* Decorative Yellow Slash \*\//,
  '</motion.div>\n      ))}      <div className="absolute inset-0 border-b-8 border-[#333]"></div>\n            {/* Decorative Yellow Slash */'
);

// We need to fix the closing tag. Wait, I should just regex replace the mapping block.
