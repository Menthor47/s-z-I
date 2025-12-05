export interface ResourceSection {
  readonly heading: string;
  readonly paragraphs: readonly string[];
}

export interface ResourceArticleConfig {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly readingTime: string;
  readonly sections: readonly ResourceSection[];
}

export interface ResourceSummary {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly readingTime: string;
}

export const RESOURCE_ARTICLES: readonly ResourceArticleConfig[] = [
  {
    slug: "moving-to-spain-guide",
    title: "Complete Guide to Moving to Spain (2025)",
    description:
      "Key points to consider if you are moving to Spain: documentation, timelines, cost ranges, and how to choose the right logistics partner.",
    readingTime: "15 min read",
    sections: [
      {
        heading: "1. Documentation and timelines",
        paragraphs: [
          "Before booking your international move, clarify visa, residency, and registration requirements both in your current country and in Spain.",
          "Check whether you need appointments at consulates, town halls or immigration offices, and how long it typically takes to obtain the relevant documents.",
          "Administrative timelines can directly affect your actual move date, so it is wise to start formalities several weeks or even months in advance.",
          "If you are moving with family, consider school enrolment calendars and how they align with your preferred moving window.",
        ],
      },
      {
        heading: "2. Typical cost ranges for an international move",
        paragraphs: [
          "Final cost will depend on volume, route, and service level (door-to-door, packing, temporary storage, extended insurance, etc.).",
          "Sea freight can be cost-efficient for large volumes with flexible timelines, while road and air options may be better for shorter transit times.",
          "Ask potential partners for an itemised quote that clearly separates transport, packing, materials, customs handling and insurance so you can compare like-for-like.",
        ],
      },
      {
        heading: "3. Choosing a reliable relocation partner",
        paragraphs: [
          "Look for companies with proven experience on the corridors that matter to you, plus recent references you can actually verify.",
          "Confirm how your belongings will be protected in transit, what insurance is included by default and what additional cover is available for high-value items.",
          "Clarify whether there will be a single point of contact who follows your move from quotation through to final delivery in Spain.",
        ],
      },
      {
        heading: "4. Packing, inventories and insurance",
        paragraphs: [
          "Create a simple room-by-room inventory before packing. This will help both with customs requirements and with checking deliveries at destination.",
          "Decide which items you want the movers to pack professionally (glass, artwork, electronics) and which you will pack yourself.",
          "For fragile or high-value belongings, discuss specific packing materials, crating options and insurance values so there are no surprises.",
        ],
      },
      {
        heading: "5. Your first weeks after arrival",
        paragraphs: [
          "Keep a separate box or suitcase with essentials for the first days in Spain so you are not dependent on the full delivery being completed.",
          "Plan time for local registrations, opening bank accounts and setting up utilities, especially if you are arriving close to public holidays or peak periods.",
        ],
      },
    ],
  },
  {
    slug: "office-move-checklist",
    title: "Office Move Checklist for a Stress-Free Relocation",
    description:
      "Step-by-step checklist to coordinate an office move: people, equipment, key dates, and internal communication.",
    readingTime: "12 min read",
    sections: [
      {
        heading: "1. Initial planning",
        paragraphs: [
          "Define a target move date and assemble an internal project team covering management, IT, operations and HR.",
          "Create a basic inventory of workstations, meeting rooms, archives and any special equipment that requires extra handling.",
          "Agree clear objectives for the move: less disruption, improved layout, better access for customers, or a mix of all three.",
        ],
      },
      {
        heading: "2. Communication with your team",
        paragraphs: [
          "Inform employees well in advance about planned dates, schedules and any access changes at the new premises.",
          "Nominate a single point of contact to handle quick questions and collect feedback from different departments.",
          "Share a simple timeline showing when packing should start, when IT will disconnect equipment and when teams are expected to be operational again.",
        ],
      },
      {
        heading: "3. Coordination with your logistics partner",
        paragraphs: [
          "Share floor plans for both current and new locations, plus information on lifts, ramps, loading areas and any restrictions.",
          "Confirm with the moving company which hours are allowed by the building or landlord, including any weekend or night access rules.",
          "Discuss whether you need packing services, crate rentals, furniture dismantling/reassembly and removal of old equipment.",
        ],
      },
      {
        heading: "4. IT, connectivity and critical systems",
        paragraphs: [
          "Coordinate closely with IT so servers, networking equipment and critical devices are shut down and restarted in a controlled way.",
          "Plan internet and telephony activation at the new site well before move day to avoid gaps in service.",
          "Identify any systems that must remain online (for example, customer support lines) and agree temporary workarounds during the move.",
        ],
      },
      {
        heading: "5. The move day and post-move checks",
        paragraphs: [
          "On the day of the move, have a small coordination team on-site to answer questions and validate that the plan is being followed.",
          "Use simple labels or colour codes to ensure that crates and furniture end up in the correct rooms at the new office.",
          "After the move, perform a short walk-through with your logistics partner to capture any pending items, damage reports or follow-up tasks.",
        ],
      },
    ],
  },
  {
    slug: "planning-freight-spain-europe",
    title: "Planning Road Freight Between Spain and the Rest of Europe",
    description:
      "Practical guidance on lanes, transit times, service types and the data you should share with carriers when requesting freight quotes.",
    readingTime: "14 min read",
    sections: [
      {
        heading: "1. Understand your lanes and transit time expectations",
        paragraphs: [
          "Start by mapping your regular lanes: origin and destination cities, preferred delivery windows and any seasonal peaks you already know about.",
          "Transit times between Spain and Northern Europe can vary significantly depending on whether you use direct full truck loads or groupage services.",
          "Share realistic delivery expectations with your logistics partner so they can propose options that balance speed, cost and reliability.",
        ],
      },
      {
        heading: "2. Choose the right service type (FTL, LTL, groupage)",
        paragraphs: [
          "Full Truck Load (FTL) services are ideal when you regularly fill a vehicle or need tight control over timing and handling.",
          "Less Than Truckload (LTL) and groupage solutions allow you to share capacity with other shippers, often at a lower cost but with slightly longer lead times.",
          "Discuss with your partner whether a mix of FTL for critical lanes and groupage for more flexible flows would make sense for your business.",
        ],
      },
      {
        heading: "3. Seasonality, capacity and pricing",
        paragraphs: [
          "European road freight capacity tightens during peak seasons such as pre-Christmas, summer holidays and major trade fairs.",
          "Booking earlier and sharing your forecasted volumes can help your logistics partner secure capacity at more stable rates.",
          "Be prepared for surcharges linked to fuel, tolls or special handling and ask for transparent pricing formulas in advance.",
        ],
      },
      {
        heading: "4. Information to include when requesting quotes",
        paragraphs: [
          "To receive accurate quotes, provide origin and destination postcodes, number of pallets or metres, weight, stackability and any access constraints.",
          "Indicate whether you need specific equipment such as tail-lifts, box trailers, temperature control or ADR-certified vehicles.",
          "If you work with strict delivery slots, share the exact time windows and any penalties imposed by your customers so routes can be planned accordingly.",
        ],
      },
      {
        heading: "5. Building a long-term relationship with your carrier",
        paragraphs: [
          "Rather than treating each shipment as a one-off, consider sharing medium-term volume expectations so your logistics partner can plan resources.",
          "Regular performance reviews using simple KPIs such as on-time delivery, damage rates and responsiveness help keep both sides aligned.",
          "With a stable relationship, your provider can proactively suggest improvements such as consolidation opportunities or alternative routing.",
        ],
      },
    ],
  },
] as const;

export const RESOURCE_SUMMARIES: readonly ResourceSummary[] = RESOURCE_ARTICLES.map((article) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  readingTime: article.readingTime,
}));

export function findArticleBySlug(slug: string | undefined): ResourceArticleConfig | undefined {
  if (!slug) return undefined;
  return RESOURCE_ARTICLES.find((article) => article.slug === slug);
}
