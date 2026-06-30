import { useEffect } from 'react';

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export default function GoogleAnalytics() {
  useEffect(() => {
    const isProduction = import.meta.env.PROD;

    if (!isProduction) {
      console.log(`[Analytics] Google Analytics placeholder initialized. (Measurement ID: ${GA_MEASUREMENT_ID})`);
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

  }, []);

  return null;
}

// Add dataLayer type definition to Window interface
declare global {
  interface Window {
    dataLayer: any[];
  }
}
