import React, { useEffect, useState } from "react";
import Navbar from "../../components/user/Navbar";
import { AnimatedImages } from "../../components/user/AnimatedImages";
import { ButtonSolid } from "../../components/common/Button";
import { Apple, Instagram } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
// import Loading from "../../components/common/Loading";

const Home = () => {
  return (
    <>
      <div className="min-h-screen py-10 bg-radial-[at_90%_90%] from-sky-400 to-white to-90%">
        <Navbar />
        <main className="md:pt-10 pt-14 md:px-20 px-3">
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
                    us—because the world is too beautiful to stay in one place.
                    Let’s create memories that last a lifetime!
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
                  <div className="h-10 p-1 w-full flex items-center md:space-x-4 space-x-2 bg-white mt-4 rounded-2xl">
                    <input
                      type="text"
                      className="h-8 w-[80%] rounded-2xl px-2 ring ring-sky-500  text-gray-700"
                      placeholder="Destination ?"
                    />
                    <ButtonSolid
                      title={"Serach"}
                      className={"px-8 py-1 md:py-1 rounded-2xl"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 md:mt-10 md:px-10">
              <AnimatedImages />
              <div className="flex items-end justify-end w-full h-44">
                <div className="space-x-2">
                  <div>
                    <Instagram />
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
