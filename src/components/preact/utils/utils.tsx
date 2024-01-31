"use strict";

// Utils
export class Utils {
  // Generate UID Random.
  uid() {
    const _uid = crypto.randomUUID();
    return _uid;
  }
}

// Function to Load Script in the DOM with execute function.
export function LoadScriptBackground() {
  const script = document.createElement("script");
  script.setAttribute("src", "/src/libs/particles.js");
  script.onload = () => {
    window["particlesJS"].load(
      "particles-js",
      "/assets/bkgd_particles-js.json"
    );
  };
  document.head.appendChild(script);
}