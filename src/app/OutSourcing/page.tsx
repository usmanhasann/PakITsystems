import Header from "@/components/common/Header";
import ClientLayout from "./ClientLayout";
import MiniHeader from "@/components/mini.header";
import Homesection from "@/components/Home-section";
import Outsourcingservices from "@/components/outsourcing.services";
import FreeItAssessment from "@/components/FreeItAssessment";
import Companyimages from "@/components/Company-images";
import Footer from "@/components/common/Footer";
import ItOutSourcingDropD from "@/components/ItOutSourcing-DropD";

export default function OutSourcing() {
  return (
    <ClientLayout>
      <MiniHeader />
      <Header />
      <Homesection />
      <ItOutSourcingDropD />
      <Outsourcingservices />
      <FreeItAssessment />
      <Companyimages />
      <Footer />
    </ClientLayout>
  );
}
