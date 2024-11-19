import { LINKS } from './LinkContent';
import NavLinks from './NavLinks';

const Links = () => {
  return (
    <div className="flex items-center gap-2">
      {LINKS.map((link) => (
        <NavLinks
          key={link.text}
          href={link.href}
          FlyoutContent={link.component}
        >
          {link.text}
        </NavLinks>
      ))}
    </div>
  );
};

export default Links;
