import * as React from "react";
import { useQuery } from "react-query";
import LoginScreen from "../components/organisms/LoginScreen/LoginScreen";
import LoaderScreen from "../components/molecules/LoaderScreen/LoaderScreen";

const index = ({ tes }) => {
  // const { isLoading, isError, data } = useQuery("user", () =>
  //   fetch("http://localhost:8080/cirestserver/api/department").then((res) => res.json())
  // );

  // if (isLoading) return "is loading ...";
  // console.log(data);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      window.location.href = "/dashboard";
    } else {
      localStorage.setItem("isLoggedIn", "false")
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <LoaderScreen />;

  return <LoginScreen />;
};

export default index;
