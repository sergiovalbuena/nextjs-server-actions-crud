"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);

const events = [
  {
    start: dayjs("2024-05-08T12:00:00.00").toDate(),
    end: dayjs("2024-05-08T13:00:00.00").toDate(),
    title: "My event",
  },
  {
    start: dayjs("2023-12-19T12:00:00.00").toDate(),
    end: dayjs("2023-12-19T13:00:00.00").toDate(),
    title: "My event 2",
  },
];

function CalendarPage() {
  return (
    <div
    // style={{
    //   height: "100vh",
    //   width: "100%",
    // }}
    >
      CalendarPage
      <Calendar
        localizer={localizer}
        events={events}
        style={{ height: 500 }}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
      />
    </div>
  );
}

export default CalendarPage;
