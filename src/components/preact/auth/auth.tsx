"use strict";

import { Auth0Client } from "@auth0/auth0-spa-js";
import { useEffect, useState } from "preact/hooks";

// Variables Globales
let _auth0Client: Auth0Client;

//Function Initialization.
async function Init({ _params }) {
  _auth0Client = new Auth0Client({
    domain: _params.domain,
    clientId: _params.clientId,
    cacheLocation: _params.cacheLocation,
    authorizationParams: _params.options.authorizationParams,
  });
}

// Function Get Information User.
async function GetInfoUser({ paramsAuth }) {
  await Init({ _params: paramsAuth });

  if (
    window.location.search.includes("state=") &&
    (window.location.search.includes("code=") ||
      window.location.search.includes("error="))
  ) {
    await _auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/users/default");
  }

  const isAuthenticated = await _auth0Client.isAuthenticated();
  const userProfile = await _auth0Client.getUser();

  return { isAuthenticated, userProfile };
}

// Function to Valid Auth.
function ValidAuth(resInfoUser: {
  isAuthenticated: undefined;
  userProfile: undefined;
}) {
  if (resInfoUser) {
    const _paramsUser = resInfoUser;
    if (_paramsUser.isAuthenticated && _paramsUser.userProfile) {
      return true;
    } else {
      return false;
    }
  }
}

// Function to Get Values in SessionStorage
function GetSessionStorage() {
  const _paramsAuth = window.sessionStorage.getItem("Auth0_Origin");
  const _paramsOptions = window.sessionStorage.getItem("Auth0_Options");

  if (_paramsAuth && _paramsOptions) {
    return { _paramsAuth, _paramsOptions };
  } else {
    sessionStorage.clear();
    localStorage.clear();
    window.top.location.href = "/";
  }
}

// Function to Valide Information UserProfile.
function ProfileUser({ _userProfile }) {
  return (
    <>
      <div class="m-2 rounded-2xl">
        <button
          type="button"
          class="relative flex rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-teal-400"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => ClickedMenuDropDown("#toggle-menuDropdown")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
        <div
          class="absolute right-0 z-50 mt-2 w-64 origin-top-right rounded-2xl hidden text-sm text-gray-700 bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          id="toggle-menuDropdown"
        >
          <div class="p-4">
            <div class="flex items-center justify-center">
              <img
                class="rounded-full"
                src={_userProfile.userProfile.picture}
                alt=""
              />
            </div>
            <div class="pt-2 items-center text-center">
              {_userProfile.userProfile.name}
              <br></br>
              {_userProfile.userProfile.email}
            </div>
          </div>
          <div class="bg-teal-700">
            <button
              class="w-full text-white font-medium text-sm px-5 py-3 text-center"
              role="menuitem"
              id="user-menu-item-1"
              onClick={() => {
                Logout();
              }}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Function to add Add Class to Element Menu.
function ClickedMenuDropDown(IdElement: any) {
  var menuDropdown = document.querySelector(IdElement);
  menuDropdown.classList.toggle("hidden");
}

// Function Get User With Auth0.
export function GetUser() {
  const _params = GetSessionStorage();

  if (_params._paramsAuth && _params._paramsOptions) {
    const _paramsOrigin = JSON.parse(_params._paramsAuth);
    _paramsOrigin.options = JSON.parse(_params._paramsOptions);

    const [isAuthenticated, setIsAuthenticated] = useState<any>(null);
    const [userProfile, setUserProfile] = useState<any>(null);

    useEffect(() => {
      GetInfoUser({ paramsAuth: _paramsOrigin }).then((value) => {
        setIsAuthenticated(value.isAuthenticated);
        setUserProfile(value.userProfile);
      });
    }, []);

    const user = { isAuthenticated, userProfile };
    const isAuth = ValidAuth(user);

    if (isAuth) {
      const profileUser = ProfileUser({ _userProfile: user });
      return profileUser;
    }
  } else {
    Logout();
  }
}

// Function to Logout.
export function Logout() {
  sessionStorage.clear();
  localStorage.clear();
  alert(
    "Su sesión fue cerrada automáticamente por inactividad, por favor ingrese de nuevo..."
  );
  window.top.location.href = "/";
}

export function GetSession({ children }) {
  const _paramsAuth = window.sessionStorage.getItem("Auth0_Origin");
  const _paramsOptions = window.sessionStorage.getItem("Auth0_Options");

  if (!_paramsAuth && !_paramsOptions) {
    Logout();
  } else {
    return <div> {children} </div>;
  }
}