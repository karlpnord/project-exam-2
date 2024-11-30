import useMeasure from 'react-use-measure';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useVenues } from '../../../hooks/venues/useVenues';
import { VenueData } from '../../../types/venueTypes';
import Loader from '../../../utils/Loader';
import PrevNextButtons from './PrevNextButtons';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const CARDS_AMOUNT = 10;

const CARD_WIDTH = 320;
const MARGIN = 50;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const { data, isLoading, isSuccess } = useVenues(
    `${apiBaseUrl}/venues?_owner=true`
  );

  let filteredVenues: VenueData[] = [];

  if (isSuccess) {
    filteredVenues = [...data.data].slice(0, CARDS_AMOUNT);
  }

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

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
      className='relative overflow-hidden bg-defaultBg py-24 font-inter'
      ref={ref}
    >
      <div className='relative z-20 overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 md:px-8'>
          <div className='mb-12'>
            <div className='space-y-3 flex justify-center'>
              <h2 className='text-4xl font-bold text-textDark'>
                Popular Venues
              </h2>
            </div>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <motion.div
              animate={{
                x: offset,
              }}
              transition={{
                ease: 'easeInOut',
              }}
              className='grid'
              style={{
                gridTemplateColumns: `repeat(${CARDS_AMOUNT}, 1fr)`,
              }}
            >
              {filteredVenues.map((venue) => (
                <Card
                  key={venue.id}
                  data={venue}
                  className='shrink-0'
                  style={{
                    width: CARD_WIDTH,
                    marginRight: MARGIN,
                  }}
                ></Card>
              ))}
            </motion.div>
          )}
          <PrevNextButtons
            shiftRight={CAN_SHIFT_RIGHT}
            shiftLeft={CAN_SHIFT_LEFT}
            onClickPrev={shiftLeft}
            onClickNext={shiftRight}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
