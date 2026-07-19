"use client";

import { useEffect } from "react";

type TranslateElementConstructor = new (
  options: {
    pageLanguage: string;
    autoDisplay: boolean;
  },
  elementId: string
) => void;

type GoogleTranslateNamespace = {
  translate?: {
    TranslateElement?: TranslateElementConstructor;
  };
};

declare global {
  interface Window {
    google?: GoogleTranslateNamespace;
    googleTranslateElementInit?: () => void;
  }
}

const SCRIPT_ID = "google-translate-script";
const ELEMENT_ID = "google_translate_element";

export default function GoogleTranslate() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement) return;

      const el = document.getElementById(ELEMENT_ID);
      if (!el) return;
      if ((el as HTMLElement).dataset.initialized === "true") return;
      (el as HTMLElement).dataset.initialized = "true";

      new TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        ELEMENT_ID
      );
    };

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if (window.google?.translate?.TranslateElement) {
        window.googleTranslateElementInit?.();
      }
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="aqm-translate" aria-label="Translate">
      <div id={ELEMENT_ID} />
    </div>
  );
}

