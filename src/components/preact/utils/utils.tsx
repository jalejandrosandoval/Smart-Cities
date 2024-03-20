"use strict";

// Utils
export class Utils {
  // Generate UID Random.
  uid() {
    const _uid = crypto.randomUUID();
    return _uid;
  }

  // Function to add Add Class to Element Menu.
  ClickedMenu(IdElement: any) {
    var menu = document.querySelector(IdElement);
    menu.classList.toggle("sm:hidden");
  }

  // Function to add Add Class to Element Menu.
  ClickedMenuDropDown(IdElement: any) {
    var menuDropdown = document.querySelector(IdElement);
    menuDropdown.classList.toggle("hidden");
  }

  // Function to Logout.
  Logout() {
    sessionStorage.clear();
    localStorage.clear();
    alert(
      "Su sesión fue cerrada automáticamente por inactividad, por favor ingrese de nuevo..."
    );
    window.top.location.href = "/";
  }

  // Function to Get Values in SessionStorage
  GetSessionStorage() {
    const _paramsAuth = window.sessionStorage.getItem("Auth0_Origin");
    const _paramsOptions = window.sessionStorage.getItem("Auth0_Options");
    const _paramsUserProfile = window.sessionStorage.getItem("UserProfile");

    if ((_paramsAuth && _paramsOptions) || _paramsUserProfile) {
      return { _paramsAuth, _paramsOptions, _paramsUserProfile };
    } else {
      sessionStorage.clear();
      localStorage.clear();
      window.top.location.href = "/";
    }
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