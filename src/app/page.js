import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";
import CommercialServicesSection from "./components/Commercial/Commercial";
import Review from "./components/Review/Review";
import HeroSection from "./components/Hero/hero";
import ResponsiveImage from "./components/Image/image";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <ResponsiveImage
  src="/images/Web-1-1536x1152 (1).webp"
  alt="Professional pressure washing services in Cincinnati"
  className="aspect-[4/3] w-full" // 4:3 ratio matching your image dimensions
  priority={true}
/>
      <ServicesSection />
      <CommercialServicesSection />
      <ClientLogos />

      <RequestEstimateForm />
      <HomeExterior />
      <Review />
      <FAQ />
    </div>
  );
}
