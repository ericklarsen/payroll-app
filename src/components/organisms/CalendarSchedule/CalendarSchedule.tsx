import * as React from "react";
import TitleBar from "../../molecules/TitleBar/TitleBar";
import DayBoxWrapper from "./DayBoxWrapper";
import DayBox from "./DayBox";
import WeekDayBox from "./WeekdayBox";
import WeekDayBoxWrapper from "./WeekDayBoxWrapper";

const CalendarSchedule: React.FC = () => {
  const weekdays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [date, setDate] = React.useState(new Date());
  const [days, setDays] = React.useState([]);
  const [prevDays, setPrevDays] = React.useState([]);
  const [nextDays, setNextDays] = React.useState([]);

  React.useEffect(() => {
    date.setDate(1);

    let day = [];
    let prevDay = [];
    let nextDay = [];

    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const nextDays = 7 - lastDayIndex - 1;

    for (let index = firstDayIndex; index > 0; index--) {
      prevDay.push(prevLastDay - index + 1);
    }

    for (let index = 1; index <= lastDay; index++) {
      day.push(index);
    }

    for (let index = 1; index <= nextDays; index++) {
      nextDay.push(index);
    }

    setPrevDays(prevDay);
    setDays(day);
    setNextDays(nextDay);
  }, [date]);

  const onNext = () => {
    const nextMonth = new Date(date.setMonth(date.getMonth() + 1));
    setDate(nextMonth);
  };

  const onPrev = () => {
    const prevMonth = new Date(date.setMonth(date.getMonth() - 1));
    setDate(prevMonth);
  };

  const onDate = (day) => {
    const newDate = new Date(date.getFullYear(), date.getMonth(), day);
    console.log(newDate);
  };

  return (
    <>
      <TitleBar text="Schedule/Calendar" />

      <div className="w-full overflow-x-auto">
        {/* Navigation */}
        <div className="w-full mt-[100px] min-w-[1040px]">
          <div className="w-full flex items-center justify-between px-[240px]">
            <img src="/img/left-arrow.svg" className="cursor-pointer" onClick={onPrev} />
            <p className="text-h4 font-bold text-black-800">
              {`${months[date.getMonth()]} ${date.getFullYear()}`}
            </p>
            <img src="/img/right-arrow.svg" className="cursor-pointer" onClick={onNext} />
          </div>
          {/* Navigation */}

          {/* Weekdays */}
          <WeekDayBoxWrapper>
            {weekdays.map((item) => (
              <WeekDayBox key={item} text={item} />
            ))}
          </WeekDayBoxWrapper>
          {/* Weekdays */}

          {/* Days */}
          <DayBoxWrapper>
            {prevDays.map((item) => (
              <DayBox key={item} day={item} disable={true} onDate={onDate} />
            ))}

            {days.map((item) => (
              <DayBox key={item} day={item} disable={false} onDate={onDate} />
            ))}

            {nextDays.map((item) => (
              <DayBox key={item} day={item} disable={true} onDate={onDate} />
            ))}
          </DayBoxWrapper>
        </div>
      </div>
    </>
  );
};

export default CalendarSchedule;
