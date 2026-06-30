import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919711566659"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-green-400/50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={30} className="text-white drop-shadow-sm" />
    </a>
  );
}
