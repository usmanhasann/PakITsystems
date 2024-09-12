"use client";
import Miniheader from "@/components/mini.header";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ClientLayout from "./ClientLayout";
import Privacy from "@/components/PrivacyPolicy.Content";
export default function PrivacyPolicy() {
  return (
    <ClientLayout>
      <Miniheader />
      <Header />
      <Privacy />

      <Footer />
    </ClientLayout>
  );
}
