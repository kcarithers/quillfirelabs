// Single source of truth for the Quillfire Labs portfolio.
// Add an entry here and it appears on the home page, portfolio page and footer.

export type VentureStatus = "live" | "in-development" | "beta";

export type Venture = {
  slug: string;
  name: string;
  /** Omit until the venture has a public website. */
  url?: string;
  /** Omit to show "Details coming soon." */
  tagline?: string;
  summary?: string;
  audience?: string;
  highlights?: string[];
  status?: VentureStatus;
};

export const ventures: Venture[] = [
  {
    slug: "nimotrax",
    name: "NimoTrax",
    url: "https://nimotrax.app",
    tagline: "Tasks, rewards and savings — managed together.",
    summary:
      "A task, rewards and savings management app for families, groups and individuals. Members propose tasks, earn points, manage savings and request rewards, while managers oversee approvals, transactions and incentives.",
    audience: "Families, groups and individuals",
    highlights: [
      "Members propose tasks and earn points",
      "Savings tracking and reward requests",
      "Manager approvals for tasks and transactions",
    ],
  },
  {
    slug: "kodatrax",
    name: "KodaTrax",
    // url: "https://kodatrax.app", — add back when ready to promote
    tagline: "Team management built for small-sided youth soccer.",
    summary:
      "A soccer team management app focused on small-sided youth soccer, bringing team organization, formations, player rotations and coaching tools into one place.",
    audience: "Youth soccer coaches and team managers",
    highlights: [
      "Team and roster organization",
      "Formations for small-sided play",
      "Player rotation planning and coaching tools",
    ],
    status: "in-development",
  },
  {
    slug: "aethron-studios",
    name: "Aethron Studios",
    // TODO: add tagline, summary and url when ready to announce.
    status: "in-development",
  },
  {
    slug: "inquisitivemaestro",
    name: "inquisitiveMaestro",
    // TODO: add tagline, summary and url when ready to announce.
    status: "in-development",
  },
];

export const statusLabel: Record<VentureStatus, string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In development",
};
