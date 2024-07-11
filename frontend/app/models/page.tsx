import Image from "next/image";
import Footer from "@/app/components/ui/footer/footer";
import Navbar from "../components/ui/navbar/navbar";
import ModelsPageHeader from "./page-header";
import ModelsGallery from "./model-gallery";

export default function Models() {
  return (
    <>
      <Navbar />
      <ModelsPageHeader />
      <ModelsGallery />
      <Footer />
    </>
  );
}
