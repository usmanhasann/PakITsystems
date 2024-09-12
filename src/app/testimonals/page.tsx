"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import Testimonalstext from "@/components/Testimonals.content";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";
import Footer from "@/components/common/Footer";
export default function Testimonals() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <Testimonalstext />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
