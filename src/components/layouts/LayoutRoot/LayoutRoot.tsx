import * as React from "react";
import Navigation from "../../molecules/Navigation/Navigation";
import UseRedirectWhenUserAlreadyLoggedin from "../../../hooks/UseRedirectWhenUserAlreadyLoggedin";
import { UseIsLoggedIn } from "../../../hooks/UseIsLoggedIn";
import ContentArea from "./ContentArea";
import NavigationTop from "../../molecules/NavigationTop/NavigationTop";

const LayoutRoot: React.FC = ({ children }) => {
  const isLoggedIn = UseIsLoggedIn();
  UseRedirectWhenUserAlreadyLoggedin();

  return (
    <div className="w-full overflow-x-hidden inline-flex">
      {isLoggedIn && <Navigation />}
      <ContentArea>
        <NavigationTop />
        {children}
      </ContentArea>
    </div>
  );
};

export default LayoutRoot;
