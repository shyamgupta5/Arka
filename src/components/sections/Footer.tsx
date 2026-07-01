import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#212125] text-black dark:text-white py-8 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 dark:border-[#333] transition-colors duration-300">
       <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
         Copyright &copy; 2026 All Rights Reserved | Arkamark
       </p>
       <div className="select-none text-black dark:text-white">
         <Logo />
       </div>
    </footer>
  );
}
