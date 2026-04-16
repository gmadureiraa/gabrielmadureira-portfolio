"use client";

import Script from "next/script";

const UMAMI_WEBSITE_ID = "d1bd8044-a42f-4f8e-b644-1b35be28d0e2";

export function Umami() {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
