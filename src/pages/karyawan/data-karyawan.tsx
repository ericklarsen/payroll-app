import React from "react";
// import { useQuery } from "react-query";
import LayoutRoot from "../../components/layouts/LayoutRoot/LayoutRoot";
import DataKaryawanScreen from "../../components/organisms/DataKaryawanScreen/DataKaryawanScreen";

const dataKaryawan: React.FC = () => {
  // const { isLoading, isError, data } = useQuery("user", () =>
  //   fetch("http://localhost:8080/cirestserver/api/department").then((res) => res.json())
  // );

  // if (isLoading) return "is loading ...";
  // console.log(data);

  return (
    <LayoutRoot>
      <DataKaryawanScreen />
    </LayoutRoot>
  );
};

export default dataKaryawan;
