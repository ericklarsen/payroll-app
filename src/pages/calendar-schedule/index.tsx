import * as React from "react";
import LayoutRoot from "../../components/layouts/LayoutRoot/LayoutRoot";
import CalendarSchedule from "../../components/organisms/CalendarSchedule/CalendarSchedule";

const calendarSchedule: React.FC = () => {
  return (
    <LayoutRoot>
      <CalendarSchedule />
    </LayoutRoot>
  );
};

export default calendarSchedule;
