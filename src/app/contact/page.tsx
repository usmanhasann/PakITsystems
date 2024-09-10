import Header from "@/components/common/Header";
import ClientLayout from "./ClientLayout";
import MiniHeader from "@/components/mini.header";
import Homesection from "@/components/Home-section";
import ContactUsform from "@/components/ContactUs.form";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import Footer from "@/components/common/Footer";

export default function Contact() {
  return (
    <ClientLayout>
      <MiniHeader />
      <Header />
      <Homesection />
      <ContactUsform />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
