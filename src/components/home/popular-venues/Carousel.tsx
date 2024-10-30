import useMeasure from "react-use-measure";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Card from "./Card";

const CARDS_AMOUNT = 5;

const CARD_WIDTH = 320;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 4 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (CARDS_AMOUNT - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="relative overflow-hidden bg-defaultBg py-24 font-inter"
      ref={ref}
    >
      <div className="relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12">
            <div className="space-y-3 flex justify-center">
              <h2 className="text-4xl font-bold text-textDark">Popular Venues</h2>
            </div>
          </div>

          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${CARDS_AMOUNT}, 1fr)`,
            }}
          >
            <Card
              className="shrink-0"
              style={{
                width: CARD_WIDTH,
                marginRight: MARGIN,
              }}
            >
            </Card>
            <Card
              className="shrink-0"
              style={{
                width: CARD_WIDTH,
                marginRight: MARGIN,
              }}
            >
            </Card>
            <Card
              className="shrink-0"
              style={{
                width: CARD_WIDTH,
                marginRight: MARGIN,
              }}
            >
            </Card>
            <Card
              className="shrink-0"
              style={{
                width: CARD_WIDTH,
                marginRight: MARGIN,
              }}
            >
            </Card>
            <Card
              className="shrink-0"
              style={{
                width: CARD_WIDTH,
                marginRight: MARGIN,
              }}
            >
            </Card>
          </motion.div>
          
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              className={`rounded-md border-[1px] border-borderClr bg-foreground p-2.5 text-2xl transition-opacity ${
                CAN_SHIFT_LEFT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_LEFT}
              onClick={shiftLeft}
            >
              <FiArrowLeft />
            </button>
            <button
              className={`rounded-md border-[1px] border-borderClr bg-foreground p-2.5 text-2xl transition-opacity ${
                CAN_SHIFT_RIGHT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_RIGHT}
              onClick={shiftRight}
            >
              <FiArrowRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Carousel;
