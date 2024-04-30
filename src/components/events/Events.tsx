import { EventT } from "@/models/events/Event.type";
import { EventBox } from "./EventBox";

const getEvents = async (): Promise<EventT[]> => {
  const resp = await fetch("http://localhost:4000/events");
  return resp.json();
};

export const Events = async () => {
  const events: EventT[] = await getEvents();

  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};
