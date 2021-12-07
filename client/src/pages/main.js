import React, { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import EventForm from '../components/EventForm';
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>;
// import { INITIAL_EVENTS, createEventId } from './event-utils'



export default class StreamerApp extends React.Component {
 

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    const mainStyle = {
      container: {
        background: "linear-gradient(135deg, #6441a5 50%, #0e9dd9)",
        borderRadius: "20px",
      },
      font: {
        color: "#0e9dd9",
        fontFamily: "'Audiowide', cursive",
      },
      calendar: {
        backgroundColor: "#F0F3F4",
        borderRadius: "20px",
      }
    };
    return (
          <div class="row">
            <div class="col-sm-1" ></div>
            <div className='streamer-app-sidebar' class="col-sm-3" style={mainStyle.container}>
                    <div className='streamer-app-sidebar-section'>
                      <h2 style={mainStyle.font}>Upcoming Events</h2>
                      <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                      </ul>
                    </div>
                    <div className='streamer-app-sidebar-section'>
                      <label>
                        <input
                          type='checkbox'
                          checked={this.state.weekendsVisible}
                          onChange={this.handleWeekendsToggle}
                        ></input>
                        toggle weekends
                      </label>
                    </div>
                    <div className='streamer-app-sidebar-section'>
                      <h2>All Events ({this.state.currentEvents.length})</h2>
                      <ul>
                        {/* {this.state.currentEvents.map(renderSidebarEvent)} */}
                      </ul>
                      <EventForm />
                    </div>
            </div>
            <div class="col-sm-7" >
              <div className='streamer-app' style={mainStyle.font}>
              {/* {this.renderSidebar()} */}
                  <div className='streamer-app-main' style={mainStyle.calendar}>
                      <FullCalendar
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                      }}
                      initialView='dayGridMonth'
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={this.state.weekendsVisible}
                      // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                      select={this.handleDateSelect}
                      // eventContent={renderEventContent} // custom render function
                      eventClick={this.handleEventClick}
                      eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                      /* you can update a remote database when these fire:
                      eventAdd={function(){}}
                      eventChange={function(){}}
                      eventRemove={function(){}}
                      */
                      />
                  </div>
              </div>
            </div>
          </div>
    )
  }

  // renderSidebar() {
  //   return (
  //     <div className='sidebar'>
  //       <div className='streamer-app-sidebar'>
  //         <div className='streamer-app-sidebar-section'>
  //           <h2>Sidebar</h2>
  //           <ul>
  //             <li>item 1</li>
  //             <li>item 2</li>
  //             <li>item 3</li>
  //           </ul>
  //         </div>
  //         <div className='streamer-app-sidebar-section'>
  //           <label>
  //             <input
  //               type='checkbox'
  //               checked={this.state.weekendsVisible}
  //               onChange={this.handleWeekendsToggle}
  //             ></input>
  //             toggle weekends
  //           </label>
  //         </div>
  //         <div className='streamer-app-sidebar-section'>
  //           <h2>All Events ({this.state.currentEvents.length})</h2>
  //           <ul>
  //             {/* {this.state.currentEvents.map(renderSidebarEvent)} */}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        // id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  // handleEventClick = (clickInfo) => {
  //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove()
  //   }
  // }

  // handleEvents = (events) => {
  //   this.setState({
  //     currentEvents: events
  //   })
  // }

// }

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }

// 
}