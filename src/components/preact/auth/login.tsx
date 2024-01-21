"use strict";

import { Auth0Client } from "@auth0/auth0-spa-js";

// Variables Globales
export let _auth0Client;

// Function Initialization and redirect to SSO Auth0.
export function Auth({ uidBtn, auth0 }) {
  const login = async () => await Login({ _auth0Params: auth0 });
  return (
    <button
      id={uidBtn}
      type="button"
      onClick={login}
      class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Ingresa o Registrate
    </button>
  );
}

// Function to Login With Auth0.
async function Login({ _auth0Params }) {
  try {
    sessionStorage.clear();
    localStorage.clear();
    _auth0Client = new Auth0Client({
      domain: _auth0Params.domain,
      clientId: _auth0Params.clientId,
      cacheLocation: _auth0Params.cacheLocation,
    });

    const _redirectUri = window.location.origin + _auth0Params.redirect_uri;

    const _options = {
      authorizationParams: {
        redirect_uri: _redirectUri,
      },
    };

    if (_auth0Client) {
      await _auth0Client.loginWithRedirect(_options);
      sessionStorage.setItem("Auth0_Origin", JSON.stringify(_auth0Params));
      sessionStorage.setItem("Auth0_Options", JSON.stringify(_options));
    }
  } catch (err) {
    console.log("Log in failed :(", err);
  }
}