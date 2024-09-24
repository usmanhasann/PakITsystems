"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";

import Footer from "@/components/common/Footer";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";
import Aboutontenttext from "@/components/About-content-text";
import Managedsecurity from "@/components/ManagedSecurity";
export default function managedSecurity() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <Managedsecurity />

      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
