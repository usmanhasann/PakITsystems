"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import Footer from "@/components/common/Footer";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";
import HelpDesk from "@/components/HelpDesk";
import Break_fix from "@/components/Break_fix";


export default function BreakFix() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <HelpDesk />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
