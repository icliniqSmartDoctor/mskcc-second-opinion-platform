import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import type { EventContentArg } from '@fullcalendar/core'

function renderEventContent(eventInfo : EventContentArg) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

function CalendarSchedular() {
  return (
    <div className='container w-3/5	 mx-auto px-10 pt-32'>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: 'event 1', date: '2023-04-01' },
            { title: 'event 2', date: '2023-04-02' }
          ]}
          
          eventContent={(e : EventContentArg) => renderEventContent(e)}
      />
    </div>
  )
}

export default CalendarSchedular