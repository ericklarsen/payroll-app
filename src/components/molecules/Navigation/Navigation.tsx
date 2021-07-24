import * as React from "react";
import NavItem from "./NavItem";
import Divider from "./Divider";
import NavItemMobile from "./NavItemMobile";

interface subMenuState {
  name: string;
  url: string;
}
interface MenuState {
  name: string;
  url: string;
  icon: string;
  mainMenu: string;
  subMenu: Array<subMenuState>;
}

const Navigation: React.FC = () => {
  const listMenu: MenuState[] = [
    {
      name: "Dashboard",
      icon: "/img/dashboard_icon.svg",
      url: "/dashboard",
      mainMenu: "dashboard",
      subMenu: [],
    },
    {
      name: "Karyawan",
      url: "",
      icon: "/img/karyawan_icon.svg",
      mainMenu: "karyawan",
      subMenu: [
        {
          name: "Data Karyawan",
          url: "/karyawan/data-karyawan",
        },
        {
          name: "Absensi",
          url: "/karyawan/absensi",
        },
        {
          name: "Lembur/Overtime",
          url: "/karyawan/lembur-overtime",
        },
        {
          name: "Cuti Tahunan",
          url: "/karyawan/cuti-tahunan",
        },
      ],
    },
    {
      name: "Payroll",
      url: "/payroll",
      icon: "/img/payroll_icon.svg",
      mainMenu: "payroll",
      subMenu: [],
    },
    {
      name: "Finance",
      url: "",
      icon: "/img/finance_icon.svg",
      mainMenu: "finance",
      subMenu: [
        {
          name: "Pinjaman",
          url: "/finance/pinjaman",
        },
        {
          name: "Angsuran",
          url: "/finance/angsuran",
        },
        {
          name: "Kasbon",
          url: "/finance/kasbon",
        },
        {
          name: "Tunjangan Lain-lain",
          url: "/finance/tunjangan-lain-lain",
        },
      ],
    },
    {
      name: "Master Data",
      url: "",
      icon: "/img/masterdata_icon.svg",
      mainMenu: "master-data",
      subMenu: [
        {
          name: "Absent Status",
          url: "/master-data/absent-status",
        },
        {
          name: "Department",
          url: "/master-data/department",
        },
        {
          name: "Position Allowance",
          url: "/master-data/position-allowance",
        },
        {
          name: "Shift Setting",
          url: "/master-data/shift-setting",
        },
        {
          name: "Calendar Status",
          url: "/master-data/calendar-status",
        },
        {
          name: "Bank Code",
          url: "/master-data/bank-code",
        },
        {
          name: "Monthly Deduction",
          url: "/master-data/monthly-deduction",
        },
        {
          name: "Gender",
          url: "/master-data/gender",
        },
        {
          name: "Marital Status",
          url: "/master-data/marital-status",
        },
        {
          name: "Religion",
          url: "/master-data/religion",
        },
      ],
    },
    {
      name: "Schedule/Calendar",
      url: "/calendar-schedule",
      icon: "/img/calendar_icon.svg",
      mainMenu: "calendar",
      subMenu: [],
    },
  ];
  return (
    <>
      <div
        className="hidden lg:block w-side-nav h-screen"
        style={{ boxShadow: "-1px 0px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="w-full flex flex-col items-center justify-center h-fit-content">
          <img src="/img/Logo.svg" alt="logo" className="w-[108px] h-[47px] object-contain m-10" />

          <div className="w-full px-4 text-center">
            <p className="text-caption1 text-black-500 font-normal">Nama Perusahaan :</p>
            <p className="text-body1 text-black-800 font-semibold text-center mt-2 mb-10">
              PT. Telekomunikasi Tbk
            </p>
          </div>
        </div>
        <div className="w-full overflow-y-auto" style={{ height: "calc(100vh - 217px)" }}>
          {listMenu.map((data, i) => (
            <React.Fragment key={i}>
              <Divider />
              <NavItem data={data} />
            </React.Fragment>
          ))}
          <Divider />
        </div>
      </div>

      <div
        className="lg:hidden bg-white w-full px-[30px] pt-5 pb-7 fixed z-100 bottom-0 flex items-center justify-center"
        style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
      >
        {listMenu.map((data, i) => (
          <React.Fragment key={i}>
            <NavItemMobile
              key={i}
              data={data}
              index={i + 1}
              hideDivider={i + 1 === listMenu.length}
            />
            {i + 1 !== listMenu.length && (
              <div className="h-7 w-[1px] bg-black-200 mr-[18px] last:mr-0"></div>
            )}
          </React.Fragment>
        ))}
        {/* <div className="flex flex-col items-center mr-[18px] last:mr-0 relative">
          <div className="absolute top-[-12px] flex">
            {[...Array(3).keys()].map((i) => (
              <div key={i} className="h-1 w-1 bg-yellow-500 rounded-full mr-[2px] last:mr-0"></div>
            ))}
          </div>
          <img src="/img/dashboard_icon.svg" className="w-[22px]" />
          <div className="h-1 w-8 bg-yellow-500 rounded-full absolute bottom-[-10px]"></div>

          <div
            className="w-[160px] absolute top-[-144px] max-h-[124px] overflow-y-auto bg-white left-0 border-l-4 border-yellow-500"
            style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="w-full py-[6px] px-[14px] text-caption1 border-b border-black-300 last:border-b-0 active:bg-black-200">
              Menu A
            </div>
          </div>
        </div>
        <div className="h-7 w-[1px] bg-black-200 mr-[18px] last:mr-0"></div> */}
      </div>
    </>
  );
};

export default Navigation;
