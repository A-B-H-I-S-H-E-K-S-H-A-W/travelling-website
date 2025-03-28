import React from "react";
import Layout from "../../Layout";
import loginBg from "../../assets/images/search.jpg";
import { ButtonOutline, ButtonSolid } from "../../components/common/Button";

const Search = () => {
  return (
    <>
      <Layout>
        <main>
          <div className="pt-20">
            <div
              className="inset-0 h-48 flex flex-col items-center w-screen"
              style={{
                background: `url(${loginBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="md:w-xl w-sm pt-24">
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
              </div>
            </div>
            <div className="min-h-screen mt-28">
              <div className="md:px-20 px-5 flex items-center justify-between">
                <h2 className="md:text-3xl text-xl font-bold">Top Searches</h2>
                <ButtonOutline
                  title={"View all"}
                  className={"md:px-3 px-2 py-1 md:py-2 rounded-md"}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Search;
