import MaxWidthWrapper from '../../../utils/MaxWidthWrapper';
import ReviewCard from './ReviewCard';
import reviewsData from './reviewsData';
import TranslateWrapper from '../../../utils/TranslateWrapper';
import SectionHeading from '../../../utils/SectionHeading';

const Reviews = () => {
  const reversedReviewsData = [...reviewsData].reverse();

  return (
    <section className="bg-defaultBg font-inter">
      <MaxWidthWrapper className="py-20 flex flex-col gap-8">
        <SectionHeading
          heading={'Customer Experiences'}
          subheading={
            'See why our users love booking and hosting with Holidaze.'
          }
        />

        <div className="flex overflow-hidden relative">
          <TranslateWrapper duration={180}>
            <>
              {reviewsData.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </>
          </TranslateWrapper>
          <TranslateWrapper duration={180}>
            <>
              {reviewsData.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </>
          </TranslateWrapper>
          <TranslateWrapper duration={180}>
            <>
              {reviewsData.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </>
          </TranslateWrapper>
          <div className="absolute bottom-0 left-0 top-0 w-10 max-w-64 bg-gradient-to-r from-[#F0F0F0] to-zinc-950/0" />
          <div className="absolute bottom-0 right-0 top-0 w-10 max-w-64 bg-gradient-to-l from-[#F0F0F0] to-zinc-950/0" />
        </div>

        <div className="flex overflow-hidden relative">
          <TranslateWrapper reverse={true} duration={180}>
            <>
              {reversedReviewsData.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </>
          </TranslateWrapper>
          <TranslateWrapper reverse={true} duration={180}>
            <>
              {reversedReviewsData.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </>
          </TranslateWrapper>
          <TranslateWrapper reverse={true} duration={180}>
            <>
              {reversedReviewsData.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </>
          </TranslateWrapper>
          <div className="absolute bottom-0 left-0 top-0 w-10 max-w-64 bg-gradient-to-r from-[#F0F0F0] to-zinc-950/0" />
          <div className="absolute bottom-0 right-0 top-0 w-10 max-w-64 bg-gradient-to-l from-[#F0F0F0] to-zinc-950/0" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Reviews;
