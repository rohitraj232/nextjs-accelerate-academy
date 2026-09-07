import Hero from "@/components/home/Hero";
import LiveSession from "@/components/home/LiveSession";
import Testimonials from "@/components/home/Testimonials";
import TopToppers from "@/components/home/TopToppers";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopToppers />
      <LiveSession />
      <Testimonials />
    </div>
  );
}
