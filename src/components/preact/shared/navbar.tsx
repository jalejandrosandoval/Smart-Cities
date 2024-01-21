"use strict";

import { GetUser } from "@/preact/auth/auth";

// Function NavBar Validation
export function NavBarValidation() {
  return (
    <>
      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto sm:hidden"
        id="toggle-menu"
      >
        <div class="text-lg sm:text-sm lg:flex-grow">
          <a
            href="/users/default"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="/users/inquiry"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4"
          >
            Encuesta
          </a>
        </div>
      </div>
      <div class="flex items-center float-right absolute right-2 top-2">
        <GetUser />
        <div class="lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded-lg text-white hover:text-teal-400 hover:border-teal-400"
            id="toggle-menu-button"
            onClick={() => ClickedMenu("#toggle-menu")}
          >
            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

// Function to add Add Class to Element Menu.
function ClickedMenu(IdElement: any) {
  var menu = document.querySelector(IdElement);
  menu.classList.toggle("sm:hidden");
}