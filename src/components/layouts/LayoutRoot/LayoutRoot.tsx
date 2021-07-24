import * as React from "react";
import Navigation from "../../molecules/Navigation/Navigation";
import UseRedirectWhenUserAlreadyLoggedin from "../../../hooks/UseRedirectWhenUserAlreadyLoggedin";
import { UseIsLoggedIn } from "../../../hooks/UseIsLoggedIn";
import ContentArea from "./ContentArea";
import NavigationTop from "../../molecules/NavigationTop/NavigationTop";

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden lg:inline-flex">
      {/* Don't wrap navigation with logic state, it will re-rendering the component */}
      <Navigation />
      <ContentArea>
        <NavigationTop />
        {children}
      </ContentArea>
    </div>
  );
};

export default LayoutRoot;
