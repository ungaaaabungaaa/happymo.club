export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "40x Challenge",
      href: "/profile",
    },
    {
      label: "AI Indicator",
      href: "/dashboard",
    },
    {
      label: "About Us ",
      href: "/projects",
    },
    {
      label: "Contact US",
      href: "/team",
    },
  ],
  links: {
    github: "https://github.com/DarkInventor",
    twitter: "https://twitter.com/kathanmehtaa",
    docs: "#",
    discord: "#",
    sponsor: "#",
  },
};
