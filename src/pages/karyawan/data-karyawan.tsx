import React from "react";
import { useQuery } from "react-query";
import DataKaryawanScreen from "../../components/organisms/DataKaryawanScreen/DataKaryawanScreen";

const dataKaryawan = () => {
  // const { isLoading, isError, data } = useQuery("user", () =>
  //   fetch("http://localhost:8080/cirestserver/api/department").then((res) => res.json())
  // );

  // if (isLoading) return "is loading ...";
  // console.log(data);

  return <DataKaryawanScreen />;
};

export default dataKaryawan;