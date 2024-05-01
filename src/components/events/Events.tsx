import { EventT } from "@/models/events/Event.type";
import { EventBox } from "./EventBox";
import { events } from "@/lib/data";

export const Events = () => {
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};
