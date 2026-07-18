const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Contact.tsx', 'utf-8');

code = code.replace(
  /<motion\.div\s*initial={{ opacity: 0, y: 20 }}\s*whileInView={{ opacity: 1, y: 0 }}\s*viewport={{ once: true, margin: "-100px" }}\s*transition={{ duration: 0\.6 }}\s*className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6"\s*>/g,
  `<motion.div
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
      >`
);

code = code.replace(
  /<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-\[\#ffcc00\] flex items-center justify-center mb-2 shadow-lg shadow-\[\#ffcc00\]\/20">/g,
  `<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#ffcc00] flex items-center justify-center mb-2 shadow-lg shadow-[#ffcc00]/20">`
);
code = code.replace(
  /<\/div>\s*<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Say hello<\/h2>/g,
  `</motion.div>\n          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-4xl md:text-5xl font-extrabold tracking-tight">Say hello</motion.h2>`
);
code = code.replace(
  /<p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light">Every meaningful experience begins with a conversation\.<\/p>/g,
  `<motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light">Every meaningful experience begins with a conversation.</motion.p>`
);
code = code.replace(
  /<p className="text-black dark:text-white font-semibold text-base md:text-lg max-w-2xl leading-relaxed mt-2 transition-colors duration-300">/g,
  `<motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-black dark:text-white font-semibold text-base md:text-lg max-w-2xl leading-relaxed mt-2 transition-colors duration-300">`
);
code = code.replace(
  /we'd love to hear from you\.\s*<\/p>\s*<a/g,
  `we'd love to hear from you.\n          </motion.p>\n          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}`
);
code = code.replace(
  /<span className="tracking-wide">Get in Touch<\/span>\s*<\/a>/g,
  `<span className="tracking-wide">Get in Touch</span>\n          </motion.a>`
);
code = code.replace(
  /<div className="w-full bg-white dark:bg-\[\#1e1e24\] rounded-xl shadow-2xl shadow-gray-200 dark:shadow-black\/40 border border-gray-100 dark:border-gray-800 p-6 md:p-10 mt-10 md:mt-14 relative z-10 mx-auto max-w-3xl transition-colors duration-300">/g,
  `<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-full bg-white dark:bg-[#1e1e24] rounded-xl shadow-2xl shadow-gray-200 dark:shadow-black/40 border border-gray-100 dark:border-gray-800 p-6 md:p-10 mt-10 md:mt-14 relative z-10 mx-auto max-w-3xl transition-colors duration-300">`
);
code = code.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/motion.div>/g,
  `</div>\n            </div>\n          </motion.div>\n       </motion.div>`
);

fs.writeFileSync('src/components/sections/Contact.tsx', code);
