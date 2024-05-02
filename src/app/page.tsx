import { Hero, Player } from "@/components";
import { Events } from "@/components/events/Events";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <div className="h-[4000px]"></div>
    </main>
  );
}
