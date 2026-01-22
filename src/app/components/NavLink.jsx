import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-silver hover:text-silver-light transition-colors duration-200 group font-medium text-sm"
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-ember to-ember-light rounded-full group-hover:w-[60%] transition-all duration-200" />
    </Link>
  );
};

export default NavLink;
