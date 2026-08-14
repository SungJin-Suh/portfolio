export type Job = {
  period: string;
  periodLabel?: string;
  role: string;
  org: string;
  orgUrl?: string;
  description: string;
  skills?: string[];
};

export const experience: Job[] = [
  {
    period: "Jan 2025 — Aug 2025",
    periodLabel: "January 2025 to August 2025",
    role: "Junior Analyst, Co-op",
    org: "York House School",
    orgUrl: "https://www.yorkhouse.ca/",
    description:
      "Provided frontline IT support for a 650+ student community, resolving 25-35 tickets a week, and managed a fleet of over 1,000 Apple devices through Mosyle MDM. Automated routine macOS tasks with Bash and consolidated nearly a decade of undocumented legacy scripts into a categorized, documented repository that staff could navigate and contribute to.",
    skills: ["Bash", "macOS", "Mosyle MDM", "Cisco Meraki", "Git", "Windows Server"],
  },
  {
    period: "Nov 2020 — Dec 2023",
    periodLabel: "November 2020 to December 2023",
    role: "Teacher on Call",
    org: "Richmond School District",
    orgUrl: "https://www.sd38.bc.ca/",
    description:
      "Taught mathematics and chemistry to classes of 30 secondary students, adapting same-day to unfamiliar classrooms, curricula, and tools. The habit of breaking a hard idea into steps someone else can follow started here.",
  },
  {
    period: "2017 — 2020",
    periodLabel: "2017 to 2020",
    role: "Earlier Teaching Roles",
    org: "Templeton Secondary · Elite Educational Institute",
    description:
      "Student teaching in secondary mathematics, followed by math and chemistry instruction for small-group and one-on-one students.",
  },
];