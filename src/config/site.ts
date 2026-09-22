export const SITE = {
  name: 'UDG Services',
  title: 'UDG Services | Appliance Repair Tri-Cities, WA',
  description: 'Veteran-owned appliance repair for homes and businesses across the Tri-Cities. All major brands, upfront pricing, warranty-backed repairs.',
  lang: 'en',
  url: (typeof process !== 'undefined' && process.env.SITE_URL) || 'https://udgservices-wa.readdy.co',
  phone: '(509) 300-4042',
  email: 'info@udgservices.com',
  address: 'Serving Richland, Pasco & Kennewick, WA',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
