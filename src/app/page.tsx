import { Hero, Player, Events, Albums, Blog } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <div className="h-[4000px]"></div>
    </main>
  );
}
