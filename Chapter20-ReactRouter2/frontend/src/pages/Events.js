import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

// import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
  // return <EventsList />;
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
