import EventsList from "../components/EventsList";
import {json, useLoaderData} from "react-router-dom";

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
  const response = await fetch("http://localhost:8080/eventsas");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status : 500 })
  } else {
    return await response.json();
  }
};
