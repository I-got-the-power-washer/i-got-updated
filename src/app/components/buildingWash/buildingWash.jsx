// components/BuildingWash.tsx
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';

const BuildingWash = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            
Building Wash
          </h2>
          
          <h3 className="text-xl text-[#00c6f9] font-semibold mb-4">
           
Building Wash
Professional Building Wash for a Flawless Exterior Finish
          </h3>
          
          <p className="text-gray-600 text-lg mb-8">
          Over time, buildings accumulate dirt, grime, mold, and mildew, which not only diminish their visual appeal but can also lead to long-term damage. Our professional building washing service is designed to restore your property’s exterior to its original brilliance, removing stubborn buildup and enhancing its overall curb appeal. What sets us apart is our soft washing approach, a gentle yet highly effective cleaning method that ensures superior results while protecting your surfaces.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
              What is Soft Washing?
              </h4>
              <p className="text-gray-600">
              Soft washing is a low-pressure cleaning technique that uses specialized equipment and eco-friendly cleaning solutions to safely remove dirt, algae, mold, and other contaminants from exterior surfaces. Unlike traditional high-pressure washing, which can damage delicate materials, soft washing relies on the cleaning power of biodegradable detergents and gentle water flow to achieve a thorough clean without risking harm to your building’s exterior.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Why Soft Washing is Better
              </h4>
              <p className="text-gray-600">
              Soft washing is ideal for maintaining the integrity of your property. High-pressure washing can strip away paint, damage siding, or erode surfaces over time, but soft washing eliminates these risks. It’s particularly effective for sensitive materials like stucco, vinyl, and older brick, as it cleans deeply without causing wear and tear. Additionally, the cleaning solutions we use not only remove unsightly stains but also help inhibit the growth of mold, mildew, and algae, providing long-lasting protection.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Benefits of Regular Building Washing
              </h4>
              <div className="space-y-4">
                <p className="text-gray-600">
                Regular maintenance through our soft washing service does more than just improve aesthetics—it also safeguards your investment by preventing decay, deterioration, and costly repairs. Our experienced team is committed to delivering meticulous cleaning without compromising the integrity of your property, ensuring a fresh, polished look that lasts
                </p>
                <p className="text-gray-600">
                Whether it’s a commercial property or a residential home, we pride ourselves on delivering exceptional results with minimal disruption to your daily routine. Trust us to rejuvenate your building’s exterior with our superior, expert-grade soft washing services. Let us help you maintain a spotless, well-maintained property that stands out for all the right reasons
                </p>
              </div>
            </div>
          </div>

          <a
            href="tel:513-570-0355"
            className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiPhoneCall className="w-5 h-5" />
            513-570-0355
          </a>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 space-y-8">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/5029d507-c128-4feb-b2cb-6dc9749f839c.png"
              alt="Building washing process"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Before/After Comparison */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/f44.png"
              alt="Building washing process"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingWash;