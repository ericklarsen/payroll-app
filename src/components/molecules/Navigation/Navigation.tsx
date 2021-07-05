import * as React from "react";
import { useQuery } from "react-query";
import Logo from "../../../../public/img/Logo.svg";
import dashboard_icon from "../../../../public/img/dashboard_icon.svg";
import karyawan_icon from "../../../../public/img/karyawan_icon.svg";
import payroll_icon from "../../../../public/img/payroll_icon.svg";
import finance_icon from "../../../../public/img/finance_icon.svg";
import masterdata_icon from "../../../../public/img/masterdata_icon.svg";
import calendar_icon from "../../../../public/img/calendar_icon.svg";
import Image from "next/image";
import NavItem from "./NavItem";
import Divider from "./Divider";

interface subMenuState {
  name: string;
  url: string;
}
interface MenuState {
  name: string;
  url: string;
  icon: StaticImageData;
  mainMenu: string;
  subMenu: Array<subMenuState>;
}

const Navigation: React.FC = () => {
  const listMenu: MenuState[] = [
    {
      name: "Dashboard",
      icon: dashboard_icon,
      url: "/dashboard",
      mainMenu: "dashboard",
      subMenu: [],
    },
    {
      name: "Karyawan",
      url: "/",
      icon: karyawan_icon,
      mainMenu: "karyawan",
      subMenu: [
        {
          name: "Data Karyawan",
          url: "/karyawan/data-karyawan",
        },
        {
          name: "Absensi",
          url: "/",
        },
        {
          name: "Lembur/Overtime",
          url: "/",
        },
        {
          name: "Cuti Tahunan",
          url: "/",
        },
      ],
    },
    {
      name: "Payroll",
      url: "/dashboard",
      icon: payroll_icon,
      mainMenu: "payroll",
      subMenu: [],
    },
    {
      name: "Finance",
      url: "/",
      icon: finance_icon,
      mainMenu: "finance",
      subMenu: [
        {
          name: "Pinjaman",
          url: "/",
        },
        {
          name: "Angsuran",
          url: "/",
        },
        {
          name: "Kasbon",
          url: "/",
        },
        {
          name: "Tunjangan Lain-lain",
          url: "/",
        },
      ],
    },
    {
      name: "Master Data",
      url: "/",
      icon: masterdata_icon,
      mainMenu: "master-data",
      subMenu: [
        {
          name: "Absent Status",
          url: "/",
        },
        {
          name: "Department",
          url: "/",
        },
        {
          name: "Position Allowance",
          url: "/",
        },
        {
          name: "Shift Setting",
          url: "/",
        },
        {
          name: "Calendar Status",
          url: "/",
        },
        {
          name: "Bank Code",
          url: "/",
        },
        {
          name: "Monthly Deduction",
          url: "/",
        },
        {
          name: "Gender",
          url: "/",
        },
        {
          name: "Marital Status",
          url: "/",
        },
        {
          name: "Religion",
          url: "/",
        },
      ],
    },
    {
      name: "Schedule/Calendar",
      url: "/dashboard",
      icon: calendar_icon,
      mainMenu: "calendar",
      subMenu: [],
    },
  ];
  return (
    <div className="w-side-nav h-screen" style={{ boxShadow: "-1px 0px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="w-full flex item-center justify-center" style={{ height: "143px" }}>
        <Image src={Logo} />
      </div>
      <div className="w-full overflow-y-auto" style={{ height: "calc(100vh - 143px)" }}>
        {listMenu.map((data, i) => (
          <React.Fragment key={i}>
            <Divider />
            <NavItem data={data} />
          </React.Fragment>
        ))}
        <Divider />
      </div>
    </div>
  );
};

export default Navigation;
