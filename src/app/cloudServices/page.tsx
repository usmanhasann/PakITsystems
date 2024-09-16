"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";

import Footer from "@/components/common/Footer";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import CloudServices from "@/components/CloudServices";
import ClientLayout from "./ClientLayout";
export default function cloudServices() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <CloudServices />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
