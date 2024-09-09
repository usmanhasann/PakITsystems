"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/Header";
import Homesection from "@/components/Home-section";
import ITOutsourcingBreakFix from "@/components/ITOutsourcing_BreakFix";
import OurServices from "@/components/Our.Services";
import OurClientsSays from "@/components/OurClients.Says";
import Footer from "@/components/Footer";
import Breakfix from "@/components/Break_fix";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";

export default function about() {
  return (
    <>
      <Miniheader />
      <Header />
      <Homesection />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </>
  );
}
