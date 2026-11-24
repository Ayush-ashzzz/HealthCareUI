import React from "react";

export default function CardiologyIcon({ size = 64, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} {...props}><circle cx="50" cy="50" r="50" fill="#187bfa"/>
<g fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
<path d="M50 76 C29 62 23 49 29 41 C34 34 44 36 50 43 C56 36 66 34 71 41 C77 49 71 62 50 76Z"/>
<circle cx="39" cy="31" r="5.5"/><circle cx="61" cy="31" r="5.5"/>
<path d="M42 36 L44 42 M58 36 L56 42 M50 43 V34 M66 44 H73 M27 46 H33"/>
</g></svg>
  );
}
