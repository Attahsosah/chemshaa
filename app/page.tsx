import Navbar from "./components/Navbar";
import LiveHero from "./components/LiveHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <LiveHero />
    </main>
  );
}