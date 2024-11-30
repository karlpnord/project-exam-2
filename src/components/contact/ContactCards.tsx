import { ContactCardsDataProps } from './contactCardsData';

type Props = {
  data: ContactCardsDataProps[];
};

const ContactCards = ({ data }: Props) => {
  return (
    <div className='grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 mt-6'>
      {data.map((card, index) => (
        <div
          key={index}
          className='flex flex-col gap-3 flex-1 w-full max-w-[260px] border border-borderClr px-4 py-6 rounded-md'
        >
          <card.icon className='text-xl text-primary' />
          <div>
            <h2 className='text-textDark font-bold'>{card.heading}</h2>
            <p className='text-textLight text-xs'>{card.description}</p>
          </div>
          <p className='text-textDark underline font-semibold text-xs hover:text-textLight transition-colors cursor-pointer'>
            {card.action}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
