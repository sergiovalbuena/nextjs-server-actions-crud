import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

function CalendarPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      CalendarPage
      <div className="h-full"></div>
      <Calendar localizer={dayjsLocalizer(dayjs)} />
    </div>
  );
}

export default CalendarPage;
