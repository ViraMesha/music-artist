import { SectionHeader } from "../SectionHeader";
import { EventBox } from "./EventBox";
import { events } from "@/lib/data";

export const Events = () => {
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader preTitle="World Tour" title="Upcoming Events" />
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};
