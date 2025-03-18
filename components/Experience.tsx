import React, { useState } from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="exp">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container relative w-full h-full min-h-64" style={{ perspective: "1500px" }}>
      <div
        className="flip-card relative w-full h-full min-h-64 transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Card */}
        <div
          className="flip-card-front w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0
          }}
        >
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
              height: "100%",
              width: "100%"
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className="absolute bottom-4 right-4 bg-purple text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-all"
            >
              Key Achievements
            </button>
          </Button>
        </div>

        {/* Back Card */}
        <div
          className="flip-card-back w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            top: 0,
            left: 0
          }}
        >
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
              height: "100%",
              width: "100%"
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col justify-between h-full p-3 py-6 md:p-5 lg:p-10">
              <div>
                <h1 className="text-start text-xl md:text-2xl font-bold mb-4">
                  Achievements
                </h1>
                <p className="text-start text-white-100 font-semibold">
                  {card.achievements}
                </p>
              </div>
              <button
                onClick={handleFlip}
                className="self-end bg-purple text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-all mt-4"
              >
                Back
              </button>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
