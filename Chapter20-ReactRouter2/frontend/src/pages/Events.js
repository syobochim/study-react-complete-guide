import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

// import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
  return <EventsList events={events} />;
  // return <EventsList />;
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/eventsadfa");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw { message: "Could not fetch events." };
  } else {
    return await response.json();
  }
};
