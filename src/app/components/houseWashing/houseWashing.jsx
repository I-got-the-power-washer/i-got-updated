"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GalleryPage from "../Gallery/gallery";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Professional from "../../../../public/animations/House washing.json";

const HouseComponent = () => {
  const PressureImages = [
    {
      before: "/images/5-1.jpg",
      after: "/images/4-1.jpg",
    },
    {
      before: "/images/20.jpg",
      after: "/images/18.jpg",
    },
    {
      before: "/images/ssde.png",
      after: "/images/fjdsh.png",
    },
    {
      before: "/images/media_20250212_221104_2401613298102951531.jpg",
      after: "/images/media_20250212_221104_8229967078494439592.jpg",
    },
  ];
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-16 flex flex-col lg:flex-row gap-8 items-center justify-between"
>
  {/* Left Side - Text Content */}
  <div className="lg:w-1/2">
    <motion.div
      initial={{ x: -20 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Green House? No Problem—We’ve Got You Covered!
      </h2>
      <p className="text-xl text-gray-600">
        Say goodbye to unsightly green growth on your home! Our specialty is
        restoring your home’s exterior to its original beauty with our
        gentle yet highly effective soft wash technique. Using less pressure
        than a garden hose, we apply premium detergents that safely break
        down dirt, algae, and other organic buildup.
      </p>
    </motion.div>
  </div>

  {/* Right Side - Lottie Animation */}
  <div className="lg:w-1/2 w-full">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[500px] mx-auto"
    >
      <Lottie 
        animationData={Professional}
        loop={true}
        className="w-full h-full"
      />
    </motion.div>
  </div>
</motion.div>

        {/* Video Section */}
        {/* Video Section */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-16"
        >
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/9HCBvY0djoQ?si=QctJReAhfIJavetc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </motion.div>

        {/* Gallery Component (To be inserted) */}
        {/* <Gallery /> */}
        <GalleryPage images={PressureImages} />

        {/* Paragraph + Image Comparison 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose-lg text-gray-600"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tiger Striping: The Hidden Surprise on Your Gutters
            </h3>
            <p className="mt-2 text-black">
              Tiger striping is one of those things you don’t notice until your
              gutters are cleaned. When gutters are covered in moss, dirt,
              algae, or other outdoor debris, the streaks stay hidden. But once
              the exterior is cleaned, those dark, vertical streaks—resembling
              tiger stripes—suddenly become visible. These streaks are caused by
              oxidation, environmental factors, and years of exposure to the
              elements.
            </p>
            <p className="mt-2 text-black">
              At IGotThePowerWasher, we specialize in removing tiger striping
              through a service we call Gutter Brightening. Our process focuses
              on cleaning the exterior of your gutters, effectively eliminating
              those unsightly streaks and restoring their original brightness.
            </p>
            <p className="mt-2 text-black">
              Here’s what you should know: Gutter Brightening works best on
              white gutters. Colored gutters, due to the nature of their finish
              and material, often do not clean up as effectively and may retain
              some discoloration even after treatment. But if you have white
              gutters, you’re in for a treat—they’ll look like new again!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/ere.png"
                  alt="Before cleaning"
                  fill
                  className="rounded-lg object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
                  Before
                </span>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/b7823a34-ce69-4d5a-94fd-c19791c099d1.png"
                  alt="After cleaning"
                  fill
                  className="rounded-lg object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
                  After
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Paragraph + Image Comparison 2 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-12 px-4 sm:px-6 lg:px-8">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="prose-xl text-gray-800 order-2 md:order-1 bg-white rounded-xl p-8 shadow-lg"
  >
    <div className="border-l-4 border-sky-500 pl-6">
      <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
        Understanding Flash Oxidation on Vinyl
      </h3>
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          If you've noticed unusual <strong className="text-sky-600">orange, red, or pink streaks</strong> on your vinyl siding or gutters post-cleaning, you're likely witnessing flash oxidation. This common phenomenon occurs when cleaning solutions interact with natural oxidation present on vinyl surfaces.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <p className="text-gray-700 italic">
            While initially concerning, these discoloration patterns are typically temporary and easily remedied—especially with professional intervention from IGotThePowerWasher!
          </p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our pressure washing specialists employ specialized techniques to:
        </p>
        
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Prevent flash oxidation during cleaning</li>
          <li>Effectively remove existing streaks</li>
          <li>Restore vinyl to pristine condition</li>
        </ul>
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative group order-1 md:order-2"
  >
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
      <Image
        src="/images/29740301_240778096496823_8672564260921933824_n1.jpg"
        alt="Vinyl oxidation treatment process"
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
      <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/50 px-4 py-2 rounded-full">
        Professional Oxidation Treatment
      </span>
    </div>
  </motion.div>
</div>
      </div>
    </section>
  );
};

export default HouseComponent;
