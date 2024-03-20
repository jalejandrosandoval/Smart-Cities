"use strict";

import { useEffect, useState } from "preact/hooks";
import { ValidAuth, GetInfoUser, GetRoleUser } from "@/preact/auth/auth";
import { Utils } from "@/preact/utils/utils";

// Variables Globales
let _Utils = new Utils();

// Function Get User With Auth0.
function GetUser() {
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
          console.log("Error GetUser Profiles()", err.message);
        });
    }, []);

    const user = { isAuthenticated, userProfile };
    const isAuth = ValidAuth({ isAuthenticated, userProfile });

    if (isAuth) {
      _paramsOrigin.userId = user.userProfile.sub;
      const rol = GetRoleUser(_paramsOrigin);
      user.userProfile.rol = rol;
      console.log("getuser", user);
      return user;
    }
  }
}

// Function to GetProfile.
export function GetProfile() {
  const _user = GetUser();
  return "_user";
}