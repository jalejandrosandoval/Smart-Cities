import { Auth0Client } from "@auth0/auth0-spa-js";

let _auth0;

export class Auth {
  async Init(_params) {
    _auth0 = new Auth0Client({
      domain: _params.domain,
      clientId: _params.clientId,
    });

    Object.freeze(_auth0);
  }

  AddClickBtn(_params) {
    let btn = document.getElementById(_params.uidBtnIngresar);

    if (btn) {
      btn.addEventListener("click", async () => {
        this.login(_params._auth0);
      });
    }
  }

  async login(_params) {
    try {
      await this.Init(_params);

      const options = {
        authorizationParams: {
          redirect_uri: window.location.origin + "/users/default",
        },
      };

      if (_auth0) {
        await _auth0.loginWithRedirect(options);
        // sessionStorage.setItem("Auth0_Origin", JSON.stringify(_params));
        // sessionStorage.setItem("Auth0_options", JSON.stringify(options));
      }
    } catch (err) {
      console.log("Log in failed", err);
    }
  }

  async getInfoUser() {
    console.log(_auth0);
    const isAuthenticated = await _auth0.isAuthenticated();
    const userProfile = await _auth0.getUser();

    // sessionStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    // sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
  }

  async getUser() {
    console.log(_auth0);
    // _auth0 = JSON.parse(localStorage.getItem("_Auth0"));
    await this.getInfoUser();
    // console.log("PARAMS", _auth0);
    // let _params = JSON.parse(sessionStorage.getItem("Auth0_Origin"));
    // let _options = JSON.parse(sessionStorage.getItem("Auth0_options"));
    // _auth0 = new Auth0Client({
    //   domain: _params["domain"],
    //   clientId: _params["clientId"],
    //   _options,
    // });

    // if (_auth0) {
      
    //   await this.getInfoUser();

    //   if (
    //     location.search.includes("state=") &&
    //     (location.search.includes("code=") ||
    //       location.search.includes("error="))
    //   ) {
    //     await _auth0.handleRedirectCallback();
    //     window.history.replaceState({}, document.title, "/users/default");
    //   }

    //   let _isAuthenticated = sessionStorage.getItem("isAuthenticated");
    //   let _userProfile = sessionStorage.getItem("userProfile");
    //   console.log(_isAuthenticated, _userProfile);
      // if (
      //   _isAuthenticated &&
      //   _userProfile
      // ) {
      //   console.log(_isAuthenticated, _userProfile);
        // if (_isAuthenticated && _userProfile !== undefined) {
        //   console.log("hay valores", _isAuthenticated, _userProfile);

        //   if (_isAuthenticated) {
        //     profileElement.style.display = "block";
        //     profileElement.innerHTML = `
        //           <p>${_userProfile.name}</p>
        //           <img src="${_userProfile.picture}" />
        //         `;
        //   } else {
        //     profileElement.style.display = "none";
        //   }
        // } else {
        //   console.log("no hay valores", _isAuthenticated, _userProfile);
        // }
      // }
    // }
  }
}