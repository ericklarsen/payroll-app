import axios from "axios";
import * as React from "react";
import { useQuery } from "react-query";
import Button from "../../molecules/Button/Button";
import Dropdown from "../../molecules/FormInput/Dropdown";
import TextInput from "../../molecules/FormInput/TextInput";
import Modal from "../../molecules/Modal/Modal";
import MoreIcon from "../../molecules/Table/MoreIcon";
import MoreMenu from "../../molecules/Table/MoreMenu";
import Table from "../../molecules/Table/Table";
import TableHeader from "../../molecules/Table/TableHeader";
import TableHeaderWrapper from "../../molecules/Table/TableHeaderWrapper";
import TableItemText from "../../molecules/Table/TableItemText";
import TableItemWrapper from "../../molecules/Table/TableItemWrapper";
import TableTab from "../../molecules/Table/TableTab";
import TableTabWrapper from "../../molecules/Table/TableTabWrapper";
import TitleBar from "../../molecules/TitleBar/TitleBar";

const DataKaryawanScreen: React.FunctionComponent = () => {
  const { isLoading, data } = useQuery("user", () =>
    axios("https://berita-indo-api.vercel.app/").then((res) => res.data)
  );
  const [isShowModal, setShowModal] = React.useState<boolean>(false);
  const [isShowDropdown, setShowDropdown] = React.useState<boolean>(false);

  const onShowModal = () => {
    setShowModal(!isShowModal);
  };

  const onShowDropdown = () => {
    setShowDropdown(!isShowDropdown);
  };

  if (isLoading) return <div>is loading ...</div>;

  return (
    <>
      <TitleBar text="Data Karyawan" />
      <Button text="Tambah Karyawan" type="primary" onClick={onShowModal} stretch={false} />

      <Modal show={isShowModal} onShow={onShowModal}>
        <TextInput
          label="Nama Karyawan*"
          placeholder="Place text in here"
          icon="/img/person-icon.svg"
        />
        <Dropdown
          label="Nama Karyawan*"
          placeholder="Please Choose"
          show={isShowDropdown}
          onShow={onShowDropdown}
        />
        <Button text="Submit" type="primary" onClick={onShowModal} stretch />
      </Modal>

      <Table>
        {/* tab */}
        <TableTabWrapper>
          <TableTab active>List Karyawan</TableTab>
          <TableTab>Performa</TableTab>
        </TableTabWrapper>
        {/* tab */}

        <div className="w-full overflow-x-auto  pb-10 ">
          {/* table header */}
          <TableHeaderWrapper>
            <TableHeader width={40} text="ID" />
            <TableHeader width={160} text="Name" />
            <TableHeader width={140} text="Posisi" />
            <TableHeader width={140} text="Departemen" />
            <TableHeader width={120} text="Jenis Kelamin" />
            <TableHeader width={100} text="Agama" />
            <TableHeader width={140} text="Telepon" />
          </TableHeaderWrapper>
          {/* table header */}

          {/* table content */}
          {[...Array(10).keys()].map((i) => (
            <TableItemWrapper key={i}>
              <TableItemText width={40} text="001" />
              <TableItemText width={160} text="Erick Larsen" />
              <TableItemText width={140} text="Programmer" />
              <TableItemText width={140} text="IT" />
              <TableItemText width={120} text="Laki-laki" />
              <TableItemText width={100} text="Buddha" />
              <TableItemText width={140} text="085264944705" />
            </TableItemWrapper>
          ))}
          {/* table content */}
        </div>
      </Table>
    </>
  );
};

export default DataKaryawanScreen;
