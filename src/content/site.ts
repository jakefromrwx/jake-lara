export const site = {
  name: "Jake Lara",
  role: "Founder of Reworx",
  title: "Digital transformation psychologist",
  location: "Lander, Wyoming",
  email: "jake@reworx307.com",
  emailHref: "mailto:jake@reworx307.com",
  linkedin: "https://www.linkedin.com/in/jakelara",
  github: "https://github.com/jakefromrwx",
  reworx: "https://rwx307.com",
  nav: [
    { href: "#work", label: "Work" },
    { href: "#approach", label: "Approach" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    headline: "Systems your team will actually use.",
    sub: "I help organizations replace paper, spreadsheets, and scattered tools with secure systems that fit how people already work, then stay with them through the change.",
  },
  problem:
    "Most digital transformations do not fail because of the software. They fail because the system does not fit how the organization works, permissions get bolted on later, and the people expected to use it were never brought along.",
  practices: [
    {
      title: "Fit the work",
      body: "Start with how the organization is actually structured: divisions, departments, positions, and the people in them. The system follows that, not the other way around.",
    },
    {
      title: "Bring people with you",
      body: "Project management and change management stay in one implementation. The team expected to live in the system helps shape it.",
    },
    {
      title: "Keep trust in the system",
      body: "Access follows each person’s role, so the right people see and do the right things from the first day, not as an afterthought.",
    },
  ],
  engagement: {
    kicker: "A recent engagement",
    org: "City of Lander, Wyoming",
    body: "With the city, I designed and put in place more than twenty custom applications across eight departments. A purchase-order system with clear roles, approval paths, and notifications cut the hours spent processing checks and preparing audits.",
  },
  audiences: [
    "Rural municipal governments",
    "Transit agencies",
    "Local contractors",
  ],
  audienceNote:
    "If an organization has real processes, real people, and real accountability, we can usually help.",
  steps: [
    {
      name: "Discover",
      body: "Map how the work happens today: who starts it, who receives it, and what already works.",
    },
    {
      name: "Design",
      body: "Sketch the future process with the people who will use it, including where automation helps.",
    },
    {
      name: "Build",
      body: "Construct the system with a few key people in the room, so it matches the organization.",
    },
    {
      name: "Enable",
      body: "Train the wider team with short videos they can watch on their own time, plus live sessions when those help.",
    },
    {
      name: "Steer",
      body: "Stay after go-live for questions, improvements, and the next round of change.",
    },
  ],
  about: [
    "I’m Jake Lara, founder of Reworx. I’m an industrial-organizational psychologist who has spent a decade leading organizations, from small local teams to international companies, through complex software rollouts.",
    "Before Reworx I led change management and training at SyncHR in Denver, working with a few clients at a time on implementations that had to stick. Reworx is the practice I built from that: technology and change management in one place, based in Lander.",
  ],
  values: [
    {
      title: "Purposeful simplicity",
      body: "Turn complexity into something a busy team can see clearly.",
    },
    {
      title: "Human-centered change",
      body: "A rollout works when the people in it were part of the design.",
    },
    {
      title: "Integrity in automation",
      body: "Automate the busywork without hiding who is responsible.",
    },
  ],
  contact: {
    heading: "Ready to make change feel simple?",
    body: "Tell me what you’re running on today, and I’ll show you what it could look like.",
  },
} as const
