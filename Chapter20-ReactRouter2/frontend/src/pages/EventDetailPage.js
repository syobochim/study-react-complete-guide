import EventItem from "../components/EventItem";
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log("response: ", resData.events);
    return resData.events;
  }
};

export const eventDetailLoader = async ({ params }) => {
  const id = params.eventId;

  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
};

export const deleteEventAction = async ({ params, request }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
};
