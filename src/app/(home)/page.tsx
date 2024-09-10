"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import ITOutsourcingBreakFix from "@/components/ITOutsourcing_BreakFix";
import OurServices from "@/components/Our.Services";
import OurClientsSays from "@/components/OurClients.Says";
import Footer from "@/components/common/Footer";
import Breakfix from "@/components/Break_fix";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <ITOutsourcingBreakFix />
      <Breakfix />
      <FreeItAssessment />
      <OurServices />
      <OurClientsSays />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
