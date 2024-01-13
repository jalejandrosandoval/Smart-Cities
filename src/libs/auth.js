
import { Auth0Client } from "@auth0/auth0-spa-js";

const _auth0 = new Auth0Client();

export class Auth{
  Init(_params){
    _auth0 = _params;
  }

  AddClickBtn(_params){ 
    var btn= document.getElementById(_params);

    if (btn) {
      btn.addEventListener("click", async () => {
        console.log("Click With Params");
        this.login();
      });
    }
  }

  async login() {
    try {
      console.log("login");
      console.log(_auth0);

      // await _auth0.loginWithRedirect({
      //   authorizationParams: {
      //     redirect_uri: window.location.origin
      //   },
      //   appState: "/"
      // });
    }
    catch (err) {
      console.log("Log in failed", err);
    };
  };
}