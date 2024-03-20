"use strict";

import { Auth0Client } from "@auth0/auth0-spa-js";
import { useEffect, useState } from "preact/hooks";
import { Utils } from "@/preact/utils/utils";

// Variables Globales
let _auth0Client: Auth0Client;
let _Utils = new Utils();

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
export async function GetInfoUser({ paramsAuth }, validState: boolean) {
  await Init({ _params: paramsAuth });

  if (validState) {
    if (
      window.location.search.includes("state=") &&
      (window.location.search.includes("code=") ||
        window.location.search.includes("error="))
    ) {
      await _auth0Client.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/users/default");
    }
  }

  const isAuthenticated = await _auth0Client.isAuthenticated();
  const userProfile = await _auth0Client.getUser();

  return { isAuthenticated, userProfile };
}

// Function to Valid Auth.
export function ValidAuth(resInfoUser: {
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

// Function to Get Role user
export function GetRoleUser(_params: any) {
  if (_params) {
    const apiUrl =
      "https://" +
      _params.domain +
      _params.endpoint_api +
      "/users/" +
      _params.userId +
      "/roles";
    const tkn = _params.tkn_api;

    if (apiUrl && tkn) {
      const [rol, setRol] = useState<any>(null);

      useEffect(() => {
        fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: tkn,
          },
        })
          .then((response) => response.json())
          .then((value) => {
            setRol(value[0].name);
          })
          .catch((err) => {
            console.log("Error GetRoleUser()", err.message);
          });
      }, []);

      return rol;
    }
  }
}

// Function to GetSession and Valid SessionStorage berfore Login With Credentials and Roles.
export function GetSession({ children }) {
  const _paramsAuth = window.sessionStorage.getItem("Auth0_Origin");
  const _paramsOptions = window.sessionStorage.getItem("Auth0_Options");

  if (!_paramsAuth && !_paramsOptions) {
    _Utils.Logout();
  } else {
    return <div> {children} </div>;
  }
}