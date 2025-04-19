import React from "react";
import Layout from "../../Layout";
import Input from "../../components/common/Input";
import { ButtonSolid } from "../../components/common/Button";

const Checkout = () => {
  const months = [
    "Month",
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = ["Year"];

  for (let year = 1995; year <= 2025; year++) {
    years.push(year);
  }
  return (
    <Layout>
      <div className="px-20 py-28 h-screen">
        <div className="grid md:grid-cols-[70%_30%]">
          <div className="">Hello</div>
          <div className="p-4 ring rounded-xl">
            <div>
              <div>
                <h3 className="text-3xl font-bold">Payment Method</h3>
                <p>Add a new payment method to your account.</p>

                <div className="py-6">
                  <div className="space-y-2 py-2">
                    <p className="font-medium">Name</p>
                    <Input type="text" placeholder={"Full Name"} />
                  </div>
                  <div className="space-y-2 py-2">
                    <p className="font-medium">City</p>
                    <Input type="text" placeholder={""} />
                  </div>
                  <div className="space-y-2 py-2">
                    <p className="font-medium">Card Number</p>
                    <Input type="number" placeholder={""} />
                  </div>
                  <div className="grid grid-cols-3 mt-8">
                    <div>
                      <label className="font-medium">Expires</label>
                      <select className="w-full border py-1.5 rounded-md">
                        {months.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-medium">Year</label>
                      <select className="w-full border py-1.5 rounded-md">
                        {years.map((year) => (
                          <option value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-medium">CVC</label>
                      <Input type={"number"} placeholder={"CVC"} />
                    </div>
                  </div>
                  <div className="mt-8">
                    <ButtonSolid
                      title={"Continue"}
                      className={"px-[9.5rem] py-2 rounded-md"}
                    >
                      Continue
                    </ButtonSolid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
