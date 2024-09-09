import Miniheader from "@/components/mini.header";
import Header from "@/components/Header";
import Homesection from "@/components/Home-section";
import ITOutsourcingBreakFix from "@/components/ITOutsourcing_BreakFix";
import OurServices from "@/components/Our.Services";
import OurClientsSays from "@/components/OurClients.Says";

export default function Home() {
  return (
    <main style={{ backgroundColor: "white" }}>
      <Miniheader />
      <Header />
      <Homesection />
      <ITOutsourcingBreakFix />
      <OurServices />
      <OurClientsSays />
    </main>
  );
}
