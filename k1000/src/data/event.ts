/**
 * K-1000 Event Registry
 * Using local assets from public/events/ for maximum performance.
 */

export interface K1000Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "Hackathon" | "Symposium" | "Workshop" | "Series";
  link: string;
  status: "COMPLETED" | "ONGOING" | "UPCOMING";
  highlights: string[];
  gallery: string[]; 
}

export const EVENTS: K1000Event[] = [
  {
    id: "sharkathon-2025",
    title: "Shark-A-Thon",
    date: "December 2025",
    description: "In collaboration with AlgoZenith, Sharkathon served as a high-stakes arena for student entrepreneurs. Participants navigated a rigorous 'Shark Tank' style environment, pitching technical innovations to seasoned industry professionals.",
    category: "Hackathon",
    link: "https://www.linkedin.com/posts/k1000-kiit_sharkathon-k1000-algozenith-activity-7403456979068968961-cszu",
    status: "COMPLETED",
    highlights: [
      "Strategic Partnership with AlgoZenith for mentorship.",
      "Live Pitching: Teams defended tech business models against industry 'Sharks'.",
      "Focused on Scalable Tech Startups and real-world solving.",
      "Direct feedback on product-market fit."
    ],
    gallery: ["/events/sharkathon.png"] // Local Path
  },
  {
    id: "kampus-konversations-ep1",
    title: "Kampus Konversations Ep.1",
    date: "September 2025",
    description: "The debut of our intellectual exchange series featured Dr. Rajakumar Ananthakrishnan from IIT Kharagpur. The session provided a tactical roadmap for students navigating GATE and JAM examinations.",
    category: "Series",
    link: "https://www.linkedin.com/posts/k1000-kiit_kampuskonversations-kiit-k1000-activity-7376926539638034432-576b",
    status: "COMPLETED",
    highlights: [
      "Keynote by Prof. Rajakumar Ananthakrishnan (IIT Kharagpur).",
      "Analysis of GATE & JAM preparation strategies.",
      "Research opportunities in core engineering domains.",
      "Attended by 120+ high-potential candidates."
    ],
    gallery: ["/events/kkep1.jpg"] // Local Path
  },
  {
    id: "ignithon-2025",
    title: "Ignithon",
    date: "August 2025",
    description: "K-1000's inaugural 12-hour hackathon, Ignithon, challenged participants to build functional solutions from scratch across three difficulty tiers.",
    category: "Hackathon",
    link: "https://www.linkedin.com/posts/k1000-kiit_k1000-ignithon-hackathon-activity-7364154401197838336-UPhb",
    status: "COMPLETED",
    highlights: [
      "12-Hour Sprint: Rapid prototyping from ideation to deployment.",
      "Tiered tracks for Beginner, Intermediate, and Advanced developers.",
      "Over 1000+ registration interests across the campus.",
      "Felicitation by the Vice Chancellor and Registrar of KIIT."
    ],
    gallery: ["/events/ignithon.png"] // Local Path
  }
];

export default EVENTS;