export const site = {
  name: "Quillfire Labs",
  legalName: "Quillfire Labs LLC",
  url: "https://quillfirelabs.com",
  email: "contact@quillfirelabs.com",
  // Used on legal pages only — not in marketing copy.
  jurisdiction: "the State of Texas",
  description:
    "Quillfire Labs is an independent company building a portfolio of products and ventures — engineered with discipline and focused on real-world problems.",
} as const;

export const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
