import MaxWidthWrapper from "../../../utils/MaxWidthWrapper";
import FeatureCard from "./FeatureCard";
import featuresData from "./featuresData";
import SectionHeading from "../../../utils/SectionHeading";

const Features = () => {
  return (
    <div className='bg-whiteBg font-inter'>
      <MaxWidthWrapper className="py-20 flex flex-col gap-16">
        <SectionHeading heading={"Features & Benefits"} subheading={"Holidaze offers a fast, secure, and easy way to find or list venues. Explore the key features that make your booking experience seamless and stress-free."} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>

      </MaxWidthWrapper>
    </div>
  );
};

export default Features;
