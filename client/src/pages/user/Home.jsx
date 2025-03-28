import React, { useEffect, useState } from "react";
import Navbar from "../../components/user/Navbar";
import { AnimatedImages } from "../../components/user/AnimatedImages";
import { ButtonSolid } from "../../components/common/Button";
import { serviceButtons } from "../../data";
import Loading from "../../components/common/Loading";
import Cards from "../../components/user/Cards";
import { offers } from "../../data";
import Footer from "../../components/user/Footer";
import Layout from "../../Layout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loader for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Layout>
            <div className="min-h-screen py-10 bg-radial-[at_90%_90%] from-sky-400 to-white to-90%">
              <main className="md:pt-10 pt-14 md:px-20">
                <div className="grid md:grid-cols-2 md:space-x-5">
                  <div className="mt-16">
                    <div>
                      <h2 className="md:text-5xl text-4xl font-bold">
                        Journey Beyond Boundaries, Where Dreams Meet{" "}
                        <span className="style-regular text-blue-700">
                          Destination.
                        </span>
                      </h2>
                      <div className="mt-3">
                        <p className="md:text-base text-xs uppercase">
                          Discover, explore, and live your travel dreams with
                          us—because the world is too beautiful to stay in one
                          place. Let’s create memories that last a lifetime!
                        </p>
                      </div>
                      <div className="mt-8">
                        <div className="w-full h-24 rounded-2xl bg-white">
                          <div className="grid grid-cols-4 text-center">
                            <div className="h-24 w-full border rounded-l-2xl flex items-center justify-center">
                              Mumbai
                            </div>
                            <div className="h-24 w-full border flex items-center justify-center">
                              Kolkata
                            </div>
                            <div className="h-24 w-full border flex items-center justify-center">
                              19 March
                            </div>
                            <div className="h-24 w-full border rounded-r-2xl flex items-center justify-center">
                              Traveller 1
                            </div>
                          </div>
                        </div>
                        <div className="h-12 p-1 w-full flex items-center md:space-x-4 space-x-2 bg-white mt-4 rounded-2xl">
                          <input
                            type="text"
                            className="h-10 w-[80%] rounded-2xl px-2 ring ring-sky-500  text-gray-700"
                            placeholder="Destination ?"
                          />
                          <ButtonSolid
                            title={"Serach"}
                            className={"px-9 py-2 md:py-2 rounded-2xl"}
                          />
                        </div>

                        <div className="mt-5 h-20">
                          <div className="grid grid-cols-3 w-full gap-3 md:gap-5 rounded-2xl">
                            {serviceButtons.map((item) => (
                              <div
                                key={item.id}
                                className={`md:h-24 h-16 w-full hover:scale-110 duration-300 cursor-pointer ${item.className}`}
                              >
                                <img
                                  className={item.imageClassName}
                                  src={item.src}
                                  alt={item.alt}
                                />
                                <p className="font-semibold text-center mt-1 text-sm md:text-lg italic">
                                  {item.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 md:mt-10 md:px-10">
                    <AnimatedImages />
                  </div>
                </div>
              </main>
            </div>
            <Cards
              CardTitle={"Top offers live now"}
              CardBtn={"See more"}
              offers={offers}
            />
            <Cards
              CardTitle={"Top hotels to choose from"}
              CardBtn={"More hotels"}
              offers={offers}
            />
            <Cards
              CardTitle={"Choose perfect destination."}
              CardBtn={"Search Places"}
              offers={offers}
            />
          </Layout>
        </>
      )}
    </>
  );
};

export default Home;
