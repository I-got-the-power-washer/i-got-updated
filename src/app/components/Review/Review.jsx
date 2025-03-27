"use client";
import Link from "next/link";
import React from "react";

const Review = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-bold text-sky-600 font-pj">
              Testimonial
            </p>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl font-pj">
              Hear What Our Clients Are Saying
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <Link
              target="_blank"
              href="https://www.google.com/search?sca_esv=243c640e07014616&sxsrf=AHTn8zpFr1gGoTPewi6I6RuhDMP6Gu20og:1742409472514&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzeUPM_7-vOMb3MkE3IolVQmlNBx0tzuBEgx_qmRvqJuGgiTX60K7H372NYcAtg1rHcg_AL-DftKpEBugvecKuErN8Rke4AETwDqVElow0BzS9Zzvhw%3D%3D&q=I+Got+The+Power+Washer+LLC+Reviews&sa=X&ved=2ahUKEwihkqaN5ZaMAxXDywIHHYR0GckQ0bkNegQINxAD&biw=1366&bih=633&dpr=1"
              className="inline-flex items-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-[#00c6f9] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 font-pj"
            >
              <img
                src="/images/google-icon.svg"
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              View All Google Reviews
            </Link>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-4 inset-y-8 md:-inset-x-8 md:-inset-y-10">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-20 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(160deg, #00C6FB 0%, #0066FF 100%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {/* Review 1 */}
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/sLB1rDY2w3t1aUvS9"
              >
                <div className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="/images/unnamed (1).png"
                          alt="Shelby Mundy"
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            Shelby Mundy
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            August 29, 2024
                          </p>
                        </div>
                      </div>
                      <img
                        src="/images/google-icon.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-4">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “Tony was incredible! He was an extremely hard worker,
                        came when he said he would be there and left our deck
                        and driveway looking brand new. I’d recommend Tony and
                        his team to anyone, and will definitely be using his
                        services in the future.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Link>

              {/* Other reviews follow same structure with updated colors */}
              {/* Review 2 */}
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/sjqicuqB8FYak6f27"
              >
                <div className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="/images/unnamed (2).png"
                          alt="Kathy Smith"
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            Kathy Smith
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            8 months ago
                          </p>
                        </div>
                      </div>
                      <img
                        src="/images/google-icon.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-4">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “Tony and Brandon did an amazing job on my house and
                        driveway. The house looks brand new! It’s 30 years old.
                        Tony was well organized, time efficient, very
                        knowledgeable and had excellent customer service
                        skills.And best of all, he takes....”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Link>

              {/* Review 3 */}
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/bgLtdAj3bWqTKPHq5"
              >
                <div className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="/images/unnamed (3).png"
                          alt="John Guluzian"
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            John Guluzian
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            9 months ago
                          </p>
                        </div>
                      </div>
                      <img
                        src="/images/google-icon.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-4">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “I could not recommend Tony and his business any higher.
                        He did a tremendous job on a large project (see before
                        and after photos). He was efficient, on time, organized,
                        and always in touch. He didn’t try to over-sell products
                        and stuck to what I ....”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
