import { Hero, Player, Events, Albums } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <div className="h-[4000px]"></div>
    </main>
  );
}
