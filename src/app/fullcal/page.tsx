"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import { posix } from "path";

export default function Calendar() {
  //
  const events = [
    { title: "Jose Perez - pr", date: "2024-05-08 10:30:00", position: "pr" },
    { title: "event 2", date: "2024-05-09", position: "pr" },
    { title: "event 3", date: "2024-05-10" },
  ];

  return (
    <div className="p-40">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="timeGridWeek"
        weekNumbers={true}
        editable={true}
        eventContent={(eventInfo) =>
          renderEventContent(
            eventInfo
            // setOpenModal,
            // openModal,
            // setItemId,
            // itemId
          )
        }
        views={{
          timeGridWeek: {
            type: "timeGrid",
            duration: { weeks: 1 },
            buttonText: "Week",
          },
        }}
        events={events}
      />
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <div
        onClick={() => {
          alert("clicked");
        }}
      >
        <b className="text-sm">{eventInfo.timeText}</b>
        <br />
        <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Test
        </button>
        <i>{eventInfo.event.title}</i>
      </div>
    </>
  );
}
