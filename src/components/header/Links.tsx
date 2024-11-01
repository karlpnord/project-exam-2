import { LINKS } from './LinkContent';
import NavLink from './NavLinks';

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((link) => (
        <NavLink
          key={link.text}
          href={link.href}
          FlyoutContent={link.component}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
