import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const NavLink = ({ 
  children, 
  href, 
  className = "", 
  ...props 
}: NavLinkProps) => (
  <Link 
    href={href} 
    {...props} 
    className={`py-2.5 px-4 text-center rounded-lg duration-150 ${className}`}
  >
    {children}
  </Link>
);

export default NavLink;