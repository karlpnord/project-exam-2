interface SectionHeadingProps {
  heading: string;
  subheading: string;
}

const SectionHeading = ({ heading, subheading }: SectionHeadingProps) => {
  return (
    <div className="mb-6 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl mb-2 font-bold text-textDark">
        {heading}
      </h2>
      <h3 className="text-sm text-textLight max-w-[700px]">{subheading}</h3>
    </div>
  );
};

export default SectionHeading;
