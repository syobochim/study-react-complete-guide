import EventItem from "../components/EventItem";
import { json, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const eventDetailLoader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
