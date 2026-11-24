import React from "react";

export default function PhysiotherapyIcon({ size = 64, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} {...props}><circle cx="50" cy="50" r="50" fill="#187bfa"/>
<g fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
<circle cx="55" cy="29" r="5.5"/>
<path d="M47 41 H61 C63 41 64 43 64 45 V63 H35 C31 63 31 56 35 56 H47Z"/>
<path d="M55 41 V50 M64 56 H70"/>
</g></svg>
  );
}
