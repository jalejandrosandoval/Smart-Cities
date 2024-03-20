"use strict";

import { Utils } from "@/preact/utils/utils";
import { ValidAuth, GetInfoUser, GetRoleUser } from "@/preact/auth/auth";
import { useEffect, useState } from "preact/hooks";

// Variables Globales
let _Utils = new Utils();

// Function to Validate Information UserProfile.
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
          onClick={() => _Utils.ClickedMenuDropDown("#toggle-menuDropdown")}
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
                _Utils.Logout();
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

// Menu with Options To User Admin.
function MenuAdmin() {
  return (
    <>
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
          href="/admin/reports"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="/admin/decisionmaking"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4"
        >
          Toma de Desiciones
        </a>
      </div>
    </>
  );
}

// Menu with Options To User Normal.
function MenuUser() {
  return (
    <>
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
    </>
  );
}

// Get Menus througth UserRoles.
function Menus(_paramsUserInfo: { isAuthenticated?: any; userProfile: any }) {
  if (_paramsUserInfo) {
    switch (_paramsUserInfo.userProfile.rol) {
      case "UserAdministrator":
        return MenuAdmin();
      case "UserGeneric":
        return MenuUser();
      default:
        break;
    }
  }
}

// Function Get Profile and User Information With Auth0.
function GetProfileNavBar() {
  const _params = _Utils.GetSessionStorage();

  if (_params._paramsAuth && _params._paramsOptions) {
    const _paramsOrigin = JSON.parse(_params._paramsAuth);
    _paramsOrigin.options = JSON.parse(_params._paramsOptions);

    const [isAuthenticated, setIsAuthenticated] = useState<any>(null);
    const [userProfile, setUserProfile] = useState<any>(null);

    useEffect(() => {
      GetInfoUser({ paramsAuth: _paramsOrigin }, true)
        .then((value) => {
          setIsAuthenticated(value.isAuthenticated);
          setUserProfile(value.userProfile);
        })
        .catch((err) => {
          console.log("Error GetProfileNavBar()", err.message);
        });
    }, []);

    const user = { isAuthenticated, userProfile };
    const isAuth = ValidAuth(user);

    if (isAuth) {
      _paramsOrigin.userId = user.userProfile.sub;
      const rol = GetRoleUser(_paramsOrigin);
      user.userProfile.rol = rol;

      const profileMenus = Menus(user);
      const profileUser = ProfileUser({ _userProfile: user });

      return (
        <>
          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto sm:hidden"
            id="toggle-menu"
          >
            {profileMenus}
          </div>
          <div class="flex items-center float-right absolute right-2 top-2">
            {profileUser}
            <div class="lg:hidden">
              <button
                class="flex items-center px-3 py-2 border rounded-lg text-white hover:text-teal-400 hover:border-teal-400"
                id="toggle-menu-button"
                onClick={() => _Utils.ClickedMenu("#toggle-menu")}
              >
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <title>Menú</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </>
      );
    }
  } else {
    _Utils.Logout();
  }
}

// Function NavBar Validation
export function NavBarValidation() {
  return (
    <>
      <GetProfileNavBar />
    </>
  );
}