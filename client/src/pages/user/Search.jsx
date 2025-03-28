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
              className="inset-0 md:h-54 h-64 flex flex-col items-center w-screen"
              style={{
                background: `url(${loginBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="pt-16 flex flex-col gap-3 px-3">
                <div className="w-full flex items-center md:space-x-8 space-x-2 bg-white mt-4 rounded-2xl p-1">
                  <input
                    type="text"
                    className="h-10 w-[85%] rounded-2xl px-2 ring ring-sky-500  text-gray-700"
                    placeholder="Destination ?"
                  />
                  <ButtonSolid
                    title={"Serach"}
                    className={"px-9 py-2 md:py-2 rounded-2xl"}
                  />
                </div>
                <div className="w-full h-24">
                  <div className="grid md:grid-cols-6 grid-cols-3 text-center gap-1">
                    <div className="h-24 w-full bg-white px-10 flex items-center justify-center rounded-2xl border shadow-2xl">
                      Mumbai
                    </div>
                    <div className="h-24 w-full bg-white flex items-center justify-center rounded-2xl">
                      Kolkata
                    </div>
                    <div className="h-24 w-full bg-white flex items-center justify-center rounded-2xl">
                      19 March
                    </div>
                    <div className="h-24 w-full bg-white flex items-center justify-center rounded-2xl">
                      Traveller 1
                    </div>
                    <div className="h-24 w-full bg-white flex items-center justify-center rounded-2xl">
                      Mumbai
                    </div>
                    <div className="h-24 w-full bg-white flex items-center justify-center rounded-2xl">
                      Kolkata
                    </div>
                  </div>
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
