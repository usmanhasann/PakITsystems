"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import WhyusCards from "@/components/whyUs.Cards";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";
import Footer from "@/components/common/Footer";
export default function whyUs() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <WhyusCards />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
