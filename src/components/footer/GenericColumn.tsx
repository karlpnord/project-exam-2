import { IconType } from 'react-icons';

const GenericColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType }[];
}) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-textDark">{title}</span>
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className="flex items-center gap-1.5 text-textLight transition-colors hover:text-textLighter hover:underline"
        >
          {link.Icon && <link.Icon />}
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default GenericColumn;
