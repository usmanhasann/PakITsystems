"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Homesection from "@/components/Home-section";

import Footer from "@/components/common/Footer";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import ClientLayout from "./ClientLayout";
import Aboutcontenttext from "@/components/About-content-text";

export default function about() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Homesection />
      <Aboutcontenttext />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
