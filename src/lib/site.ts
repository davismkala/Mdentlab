export const SITE = {
  name: "MDent: Middle East Dental Laboratory",
  shortName: "MDent",
  address: "White Crown Tower, Office 1901 Sheikh Zayed Road",
  email: "info@mdentlab.com",
  phone: "+971 4 332 9201",
  phoneHref: "tel:+97143329201",
  whatsapp: "https://wa.me/97143329201",
  logoWhite:
    "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/09/White-logo-1536x578-1.png?fit=1024%2C385&ssl=1",
  logoFooter: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/mdent-trans.png?ssl=1",
};

export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/dzqB8hqVswd65BWq/?mibextid=LQQJ4d",
    icon: "facebook" as const,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/middle_east_dental_laboratory",
    icon: "instagram" as const,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/middle-east-dental-laboratory/",
    icon: "linkedin" as const,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@middleeastdentallaboratory9895",
    icon: "youtube" as const,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@mdentlaboratory",
    icon: "tiktok" as const,
  },
];

export type NavLeaf = { label: string; to: string };
export type NavChild = { label: string; to: string; children?: NavLeaf[] };
export type NavGroup = { label: string; to?: string; children?: NavChild[] };

export const NAV: NavGroup[] = [
  { label: "Home", to: "/" },
  {
    label: "Our Products",
    children: [
      {
        label: "Veneers",
        to: "/veneers",
        children: [{ label: "Lithium Disilicate (E.Max)", to: "/veneers#Lithiumv" }],
      },
      {
        label: "Crowns",
        to: "/crowns",
        children: [
          { label: "Layered Zirconium Crowns", to: "/crowns#Layered" },
          { label: "Zircon Solid Multi-Layered Crowns", to: "/crowns#Zircon" },
          { label: "Lithium Disilicate (E.Max)", to: "/crowns#Lithiumc" },
          { label: "PFM (Porcelain-Fused-to-Metal) Crowns", to: "/crowns#pfm" },
          { label: "Gold Crown", to: "/crowns#gold" },
        ],
      },
      { label: "Inlay/Onlay", to: "/inlay-onlay" },
      {
        label: "Implant restorations",
        to: "/implant-restorations",
        children: [
          { label: "Screw-Retained Restorations", to: "/implant-restorations#screw" },
          { label: "Cemented Restorations", to: "/implant-restorations#cemented" },
          { label: "Toronto Bridge", to: "/implant-restorations#toronto" },
          {
            label: "Implant Bar Over Denture (Implant-Supported Denture)",
            to: "/implant-restorations#bar",
          },
          { label: "Surgical Guide", to: "/surgical-guide" },
        ],
      },
      {
        label: "Dentures",
        to: "/dentures",
        children: [
          { label: "Acrylic Dentures", to: "/dentures#acrylic" },
          { label: "Flexible Dentures", to: "/dentures#flexible" },
          { label: "Chrome RPD", to: "/dentures#chrome" },
        ],
      },
      {
        label: "Digital products",
        to: "/digital-products",
        children: [
          { label: "CAD Design", to: "/digital-products#cad" },
          { label: "Model Printing", to: "/digital-products#model" },
          { label: "Smile Design", to: "/smile-design" },
          { label: "Surgical Guide", to: "/surgical-guide" },
        ],
      },
      {
        label: "Orthodontics",
        to: "/orthodontics",
        children: [
          { label: "Fixed Appliances", to: "/orthodontics#fixed" },
          { label: "Removable Appliances", to: "/orthodontics#removable" },
          { label: "Retainers", to: "/orthodontics#retainers" },
          { label: "Inman Aligner", to: "/inman-aligner" },
        ],
      },
      { label: "Sleep Apnea Appliance", to: "/sleep-apnea-appliance" },
      { label: "Night guards", to: "/night-guards" },
      { label: "Sports Guards", to: "/sports-guards" },
      { label: "ClearSmile Aligners", to: "/clearsmile-aligners" },
    ],
  },
  {
    label: "Get Started",
    children: [
      { label: "Digital Impressions", to: "/digital-impressions" },
      { label: "Regular Impressions", to: "/regular-impressions" },
      { label: "Terms and Conditions", to: "/terms-and-conditions" },
      { label: "5 year warranty", to: "/5-year-warranty" },
      { label: "Shade Matching", to: "/shade-matching" },
      { label: "World Wide Delivery", to: "/world-wide-delivery" },
    ],
  },
  {
    label: "Why MDent",
    children: [
      { label: "Message from the Founder", to: "/message-from-the-founder" },
      { label: "Our Clients", to: "/our-clients" },
      { label: "About Us", to: "/about-us" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
  {
    label: "People",
    children: [
      { label: "MDent Team", to: "/mdent-team" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    label: "CME & Events",
    children: [
      { label: "Upcoming Events", to: "/upcoming-events" },
      { label: "Past Events", to: "/past-events" },
    ],
  },
];

export const FOOTER_SERVICES: NavLeaf[] = [
  { label: "Veneers", to: "/veneers" },
  { label: "Dentures", to: "/dentures" },
  { label: "Implant restorations", to: "/implant-restorations" },
  { label: "Crowns", to: "/crowns" },
  { label: "Orthodontics", to: "/orthodontics" },
  { label: "Digital products", to: "/digital-products" },
  { label: "Night guards", to: "/night-guards" },
  { label: "Sleep Apnea Appliance", to: "/sleep-apnea-appliance" },
];

export const FOOTER_USEFUL: NavLeaf[] = [
  { label: "Dental Lab UAE", to: "/dental-lab-uae" },
  { label: "About Us", to: "/about-us" },
  { label: "MDent Team", to: "/mdent-team" },
  { label: "Careers", to: "/careers" },
  { label: "Get in touch with the MDent team", to: "/booking-form" },
  { label: "Our Clients", to: "/our-clients" },
];

export const PRODUCT_CARDS = [
  {
    title: "Veneers",
    to: "/veneers",
    image: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/veneers.jpg?w=1200&ssl=1",
    text: "MDent crafts high-quality veneers that offer a perfect blend of fit, durability, and natural beauty for an impeccable smile.",
  },
  {
    title: "Crowns",
    to: "/crowns",
    image: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/crowns.jpg?w=1200&ssl=1",
    text: "Choose from a variety of material options for custom crowns, ensuring a precise fit, exceptional strength, and a seamless blend with natural teeth.",
  },
  {
    title: "Implant Restorations",
    to: "/implant-restorations",
    image: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/implant.jpg?w=1200&ssl=1",
    text: "With many years of experience, MDent specializes in crafting implant restorations that offer perfect fit, durability, and outstanding aesthetics",
  },
  {
    title: "Dentures",
    to: "/dentures",
    image: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/dentures.jpg?w=1200&ssl=1",
    text: "MDent excels in creating premium dentures that deliver exceptional fit, comfort, and natural-looking results.",
  },
];

export const IMAGES = {
  technicians:
    "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/06/Mdent-Services-Dubai-1-1024x684-1.jpg?fit=1024%2C684&ssl=1",
  closing:
    "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/DSC04467-1-scaled.jpg?fit=1024%2C683&ssl=1",
  crownsHero:
    "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/crown-main-photo.jpg?resize=1024%2C844&ssl=1",
};
