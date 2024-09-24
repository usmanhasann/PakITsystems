"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";
import Footer from "@/components/common/Footer";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";
import FreeItAssessmentDropD from "@/components/FreeItAssessmentDropD";
import FreeItAsssessmentReport from "@/components/FreeItAsssessmentReport";
import RequiredFields from "@/components/RequiredFields";

export default function freeItAssessment() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <FreeItAssessmentDropD />
      <FreeItAsssessmentReport />
      <RequiredFields />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
