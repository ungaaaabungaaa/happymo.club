import { ReactNode } from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const SectionWrapper = ({ 
  children, 
  className = "", 
  ...props 
}: SectionWrapperProps) => (
  <section 
    {...props} 
    className={`py-16 ${className}`}
  >
    {children}
  </section>
);

export default SectionWrapper;