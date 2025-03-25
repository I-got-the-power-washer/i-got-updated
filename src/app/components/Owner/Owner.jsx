"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Team from "../Team/team";

const PopupJobOffer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-[#00C6F9] to-blue-600 p-8 rounded-2xl w-[90%] max-w-3xl mx-auto mt-8 shadow-xl border-2 border-white"
    >
      <div className="flex flex-col space-y-4 text-white">
        <h2 className="text-2xl font-bold mb-2">Join Our Growing Team!</h2>
        <div className="space-y-3">
          <p className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Cincinnati area residents wanted
          </p>
          <p className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Flexible team or independent positions
          </p>
          <p className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Available any time of the week
          </p>
        </div>
        <a
          href="#"
          className="mt-4 inline-flex items-center justify-center bg-white text-[#00C6F9] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
};

const Owner = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [showPopup, setShowPopup] = useState(false);
  const teamRef = useRef(null);

  useEffect(() => {
    controls.start("visible");
    textControls.start("visible");
  }, [controls, textControls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPopup(true);
        }
      },
      { threshold: 0.5 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  return (
    <>
      {/* Tony Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-[#00C6F9]"
            >
              <img
                src="/images/owner-i-got.jpeg"
                alt="Tony Werner"
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={textControls}
              variants={textVariants}
              className="space-y-8"
            >
              <div className="pb-6 border-b-2 border-[#00C6F9]">
                <h2 className="text-4xl font-bold text-gray-900">
                  Hi, I'm Tony Werner
                </h2>
                <p className="mt-2 text-lg text-[#00C6F9]">
                  Owner & Founder of IGotThePowerWasher
                </p>
              </div>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                I'm passionate about making Cincinnati shine. I moved here from
                Hamburg, Germany, in 2012, and I've loved calling this city home
                ever since. I started power washing six years ago, and it's been
                an incredible journey building IGotThePowerWasher into the
                fastest-growing pressure washing company in the area.
              </motion.p>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                My philosophy is simple: provide the highest quality work at the
                best price. I'm not happy until you are, and my team and I strive
                for perfection on every job. We don't just clean—we take pride in
                transforming your property.
              </motion.p>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                In addition to power washing, I also run Complete Seal Solutions,
                where we specialize in sealing a wide variety of surfaces. Whether
                it's concrete, pavers, driveways, patios, or even pool decks,
                we've got you covered. Sealing is a MUST, especially here in Ohio.
                Our freeze-and-thaw cycle can wreak havoc on surfaces, causing
                them to crack, chip, and deteriorate over time.
              </motion.p>

              <motion.button
                className="mt-8 inline-flex items-center bg-[#00C6F9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0099C6] transition-colors"
                variants={textVariants}
              >
                <FaPhoneAlt className="mr-3 text-xl" />
                <Link href="tel:+15135700355">(513) 570-0355</Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Tony Content */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
            I'm also the owner of WashingSupply, where I've designed and developed
            cutting-edge pressure washing equipment. Over the years, we've sold
            hundreds of units, and it's been incredible to see how this innovation
            has not only improved our own services but also helped our customers
            achieve outstanding results.
          </motion.p>

          <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
            One of my favorite stories is from my very first customer. She
            actually yelled at me because my prices were too low—she paid me extra
            and said, "Next time I hire you, you better raise your prices!" Now,
            she's a close friend with a spotless property, and that's the kind of
            relationship I love building with my customers.
          </motion.p>

          <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
            If you're looking for top-notch service, fair pricing, and a team that
            truly cares, give us a call or text at 513-570-0355 to schedule your
            free, no-obligation estimate. You can also visit us at 3640 Werk Rd.
            (right next to the USPS). Mention this story, and I'll give you 10%
            off your first service!
          </motion.p>

          <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm font-semibold">
            Let's keep it clean!
          </motion.p>
        </div>
      </section>

      {/* Andrew Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={textControls}
              variants={textVariants}
              className="space-y-8 order-last lg:order-first"
            >
              <div className="pb-6 border-b-2 border-[#00C6F9]">
                <h2 className="text-4xl font-bold text-gray-900">
                  Meet Andrew Thompson
                </h2>
                <p className="mt-2 text-lg text-[#00C6F9]">
                  Chief Operating Officer
                </p>
              </div>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                Andrew is a committed and detail-oriented professional,
                consistently delivering high-quality results across all areas of
                our operations. As Chief Operating Officer of I Got the Power
                Washer, he plays a pivotal role in ensuring operational
                excellence, leading our team with a relentless commitment to
                quality, efficiency, and customer satisfaction.
              </motion.p>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                A native of Spring Hill, Tennessee, Andrew brings a unique blend
                of Southern charm and grit to our team—qualities essential for the
                high demands of our industry. His leadership consistently drives
                our crew to success, delivering flawless results year after year.
              </motion.p>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                Andrew is a graduate of Mount St. Joseph University and holds a
                master's degree, demonstrating his dedication to continuous growth
                and excellence. During his time at MSJ, he was a standout football
                player and five-year starter, serving as captain of the 2024 team.
              </motion.p>

              <motion.p className="text-gray-600 text-lg leading-relaxed font-semibold">
                "Hard work and faith pave the way to success."
              </motion.p>

              <motion.p className="text-gray-600 text-lg leading-relaxed">
                As he always says: "Be the doer in your life and watch as God
                blesses you abundantly."
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-[#00C6F9]"
            >
              <img
                src="/images/369.png"
                alt="Andrew Thompson"
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div ref={teamRef} className="bg-gray-50 pt-20 pb-28 px-4 sm:px-6 lg:px-8">
        <Team />
        {showPopup && <PopupJobOffer />}
      </div>
    </>
  );
};

export default Owner;