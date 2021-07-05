import * as React from "react";

export const UseIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const local = localStorage.getItem("isLoggedIn");
    if (local === "false") {
      localStorage.setItem("isLoggedIn", "false");
    } else {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    }
  }, []);

  return isLoggedIn;
};
