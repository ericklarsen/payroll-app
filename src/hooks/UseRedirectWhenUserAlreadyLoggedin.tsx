import * as React from "react";

const UseRedirectWhenUserAlreadyLoggedin = () => {
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "false") {
      window.location.href = "/";
    }
  }, []);
};

export default UseRedirectWhenUserAlreadyLoggedin;
