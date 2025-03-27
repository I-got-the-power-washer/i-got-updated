"use client";
import { useState } from "react";
import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";
import CommercialServicesSection from "./components/Commercial/Commercial";
import Review from "./components/Review/Review";
import ResponsiveImage from "./components/Image/image";
import Loader from "./components/Loading/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {/* Loader with blur overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm">
          <Loader onFinish={() => setLoading(false)} />
        </div>
      )}

      {/* Main Content with blur transition */}
      <div className={`transition-all duration-500 ${loading ? 'blur-sm' : 'blur-none'}`}>
        <ResponsiveImage
          src="/images/Web-1-1536x1152 (1).webp"
          alt="Professional pressure washing services in Cincinnati"
          className="aspect-[4/3] w-full"
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
    </div>
  );
}