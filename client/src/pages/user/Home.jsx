import React, { useEffect, useState } from "react";
import { ButtonSolid } from "../../components/common/Button";
import Loading from "../../components/common/Loading";
import Cards from "../../components/user/Cards";
import { offers } from "../../data";
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
            <div className="min-h-screen py-10 bg-cover bg-no-repeat bg-[url('./src/assets/images/bg_main.jpg')]">
              <main className="md:pt-28 max-w-6xl mx-auto pt-14 md:px-20 px-3">
                <div className="text-center md:space-x-5">
                  <div className="mt-16">
                    <div>
                      <h2 className="md:text-6xl text-4xl font-bold">
                        Journey Beyond Boundaries, Where Dreams Meet{" "}
                        <span className="style-regular text-blue-700">
                          Destination.
                        </span>
                      </h2>
                      <div className="mt-2">
                        <p className="md:text-base text-xs max-w-2xl mx-auto uppercase">
                          Discover, explore, and live your travel dreams with
                          us—because the world is too beautiful to stay in one
                          place. Let’s create memories that last a lifetime!
                        </p>
                      </div>
                      <div className="mt-6">
                        <div className="w-full md:h-16 md:rounded-full rounded-xl bg-white">
                          <div className="grid grid-cols-2 md:grid-cols-5 text-center px-2">
                            <div className="h-16 w-full flex items-center justify-center">
                              Mumbai
                            </div>
                            <div className="h-16 w-full flex items-center justify-center">
                              Kolkata
                            </div>
                            <div className="h-16 w-full flex items-center justify-center">
                              19 March
                            </div>
                            <div className="h-16 w-full flex items-center justify-center">
                              Traveller 1
                            </div>
                            <div className="h-16 w-full flex items-center justify-center">
                              <ButtonSolid
                                title={"Serach"}
                                className={
                                  "md:px-18 px-3 py-2 md:py-3 md:rounded-full rounded-xl w-full"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
