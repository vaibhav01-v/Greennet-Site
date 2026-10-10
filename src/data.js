// Editable site content. Replace placeholders with real details.
export const NAV = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/pricing", "Pricing"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
];
export const SERVICES = [
  {
    id: "design",
    name: "Garden design",
    blurb: "Custom plans for beds, borders, and whole yards.",
    who: "Homeowners starting from scratch or refreshing a tired yard.",
    inc: [
      "Site visit and soil check",
      "Planting plan with plant list",
      "Scaled layout drawing",
      "One round of revisions",
    ],
    t: "a",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    blurb: "Patios, paths, edging, raised beds, and structural upgrades.",
    who: "Anyone adding usable outdoor living space.",
    inc: [
      "Hardscape and softscape installation",
      "Drainage and grading fixes",
      "Lighting and irrigation basics",
      "Cleanup and handover",
    ],
    t: "b",
  },
  {
    id: "lawn",
    name: "Lawn care",
    blurb: "Mowing, feeding, aeration, and repair of tired lawns.",
    who: "Busy homeowners who want a lawn that stays green.",
    inc: [
      "Seasonal feeding schedule",
      "Aeration and overseeding",
      "Weed control",
      "Regular mowing option",
    ],
    t: "c",
  },
  {
    id: "planting",
    name: "Seasonal planting",
    blurb: "Colour for every season, chosen for your light and climate.",
    who: "Renters and owners who want quick, low-effort colour.",
    inc: [
      "Containers and bed refreshes",
      "Bulbs, annuals, and perennials",
      "Pollinator-friendly mixes",
      "Plant care card",
    ],
    t: "d",
  },
  {
    id: "maintenance",
    name: "Garden maintenance",
    blurb: "Ongoing visits to keep your garden tidy and healthy.",
    who: "Owners who love their garden but lack the time.",
    inc: [
      "Pruning and weeding",
      "Mulching and watering checks",
      "Pest and disease monitoring",
      "Monthly or fortnightly visits",
    ],
    t: "a",
  },
];
export const PROJECTS = [
  {
    name: "The Patel courtyard",
    type: "Garden design",
    t: "a",
    text: "Small courtyard turned into a shaded herb and seating nook.",
  },
  {
    name: "Hillcrest terrace",
    type: "Landscaping",
    t: "b",
    text: "Stone steps and drainage for a sloping front garden.",
  },
  {
    name: "Maple Lane lawn rescue",
    type: "Lawn care",
    t: "c",
    text: "Compacted lawn aerated and reseeded in one season.",
  },
  {
    name: "Rooftop containers",
    type: "Seasonal planting",
    t: "d",
    text: "Balcony planters in colours that bloom April to October.",
  },
  {
    name: "The Okafor border",
    type: "Garden design",
    t: "d",
    text: "Deep pollinator border along a 12 m fence.",
  },
  {
    name: "Riverside patio",
    type: "Landscaping",
    t: "a",
    text: "Permeable patio with raised vegetable beds.",
  },
];
export const PACKAGES = [
  {
    name: "Refresh",
    price: "from $450",
    text: "A one-off tidy and planting update.",
    inc: ["Bed cleanup and mulch", "Seasonal planting", "Lawn edge and trim"],
  },
  {
    name: "Design",
    price: "from $1,200",
    text: "A full garden plan you can build yourself or with us.",
    inc: [
      "Site visit and soil check",
      "Scaled plan and plant list",
      "One revision round",
    ],
    feat: true,
  },
  {
    name: "Care plan",
    price: "from $120/month",
    text: "Regular visits to keep everything thriving.",
    inc: ["Mowing and weeding", "Pruning and feeding", "Seasonal plant swaps"],
  },
];
export const FAQ = [
  [
    "What happens in a free consultation?",
    "We visit your space, discuss your goals and budget, and follow up with ideas and a quote. It takes about 45 minutes.",
  ],
  [
    "How do you price projects?",
    "Packages show starting prices. Your final quote depends on size, materials, and access, and is agreed before work starts.",
  ],
  [
    "Where do you work?",
    "We cover the city and surrounding suburbs within roughly 40 km. Contact us if you are just outside.",
  ],
  [
    "How long does a project take?",
    "Planting refreshes take a day. Design plans take one to two weeks. Landscaping builds usually take two to six weeks.",
  ],
  [
    "Do you work with renters?",
    "Yes. We offer container gardens and removable upgrades, and we suggest asking your landlord first.",
  ],
  [
    "How do I keep my garden healthy afterwards?",
    "We provide a care card for every project, and a monthly care plan is available if you prefer us to handle it.",
  ],
];
export const TESTIMONIALS = [
  [
    "They turned our bare back yard into the place we eat dinner all summer.",
    "Priya S., homeowner",
  ],
  [
    "As a renter I thought a real garden was out of reach. The container plan was perfect.",
    "Daniel M., renter",
  ],
  [
    "On time, tidy, and the quote matched the final bill.",
    "Grace O., homeowner",
  ],
];
export const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    items: [
      [
        "Information we collect",
        "Details you give us, such as name, email, phone, and project information when you contact us.",
      ],
      [
        "How we use it",
        "To reply to enquiries, prepare quotes, and deliver services. We do not sell personal data.",
      ],
      ["Cookies and analytics", "[Describe any analytics or cookies you add.]"],
      [
        "Your rights",
        "You can ask to access, correct, or delete your data at hello@greennest.example.",
      ],
    ],
  },
  terms: {
    title: "Terms of Service",
    items: [
      [
        "Quotes and bookings",
        "Quotes are valid for [30] days. Work is booked once a written quote is accepted.",
      ],
      ["Payment", "[Add deposit and payment terms.]"],
      ["Cancellations", "[Add notice period and fees.]"],
      [
        "Liability",
        "[Add limits, weather delays, and warranty terms reviewed by a professional.]",
      ],
    ],
  },
};
