interface Props {
  name: string;
  email: string;
}

const CardRealtor = ({ name, email }: Props) => {
  return (
    <div className='px-4 py-3 bg-defaultBg'>
      <h2 className='text-textLight text-xs mb-1 uppercase'>Realtor</h2>
      <h3 className='text-textDark font-semibold text-sm mb-[-4px]'>{name}</h3>
      <h4 className='text-textDark font-semibold text-sm'>{email}</h4>
    </div>
  );
};

export default CardRealtor;
