import React from 'react';

export default function YellowSlash({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="74" height="65" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M51.5476 0.00102982L73.343 -2.22225e-05L67.0422 5.6309L9.80982e-07 64.3492L51.5476 0.00102982Z" fill="url(#paint0_linear_2007_40)"/>
      <defs>
        <linearGradient id="paint0_linear_2007_40" x1="2.26895" y1="53.8831" x2="70.7449" y2="-3.65604" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"/>
          <stop offset="1" stopColor="#FFBF00"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
