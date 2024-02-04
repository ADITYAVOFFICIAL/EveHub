import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Databases } from "appwrite"; // Import the necessary module from the Appwrite SDK

function Cal() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Initialize the Appwrite SDK
        const appwrite = new Databases(process.env.REACT_APP_PROJECT_ID);
        console.log('Fetched documents:', response.data.documents);
        // Set the endpoint
        appwrite.setEndpoint(process.env.REACT_APP_API_ENDPOINT);
        
        // Fetch events from the backend
        const response = await appwrite.listDocuments(
          process.env.REACT_APP_DATABASE_ID,
          process.env.REACT_APP_EVENTS_COLLECTION_ID
        );
        
        // Set the fetched events to state
        setEvents(response.documents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map(event => ({
          title: event.title,
          start: new Date(event.date), // Parse the date string into a Date object
          // Add more fields as needed
        }))}
        eventClick={(info) => {
          // Handle event click here, e.g., show event details modal
          console.log('Event clicked:', info.event);
        }}
      />
    </div>
  );
}

export default Cal;
