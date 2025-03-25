import React from "react";
import { offers } from "../../data";
import { ButtonOutline } from "../common/Button";
import CardCarousel from "./Carousel";

const Cards = () => {
  return (
    <div className="h-screen">
      <div>
        <div className="h-40 flex items-center justify-between md:px-20 px-2">
          <h2 className="md:text-4xl text-2xl font-bold">
            Top offers live now
          </h2>
          <div>
            <ButtonOutline
              title={"See more"}
              className={
                "md:px-6 px-3 py-2 md:py-3 rounded-2xl hover:bg-cyan-500 text-sm md:text-base hover:text-white"
              }
            >
              See more
            </ButtonOutline>
          </div>
        </div>
        <div>
          <CardCarousel offerCards={offers} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
