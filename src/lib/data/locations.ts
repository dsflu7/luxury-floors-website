import type { Location } from '$lib/types';

export const locationIds = [
  'vancouver',
  'burnaby', 
  'richmond',
  'surrey',
  'langley',
  'delta',
  'new-westminster',
  'north-vancouver',
  'west-vancouver',
  'coquitlam',
  'port-coquitlam',
  'maple-ridge',
  'white-rock'
] as const;

export type LocationId = typeof locationIds[number];

export const locationData: Record<LocationId, Location> = {
  'vancouver': {
    id: 'vancouver',
    name: 'Vancouver',
    slug: 'vancouver',
    description: 'Premium luxury floor installations throughout Vancouver. Serving all neighborhoods from downtown to the suburbs.',
    coverageArea: [
      'Downtown Vancouver',
      'West End',
      'Kitsilano',
      'Point Grey',
      'Kerrisdale',
      'Dunbar',
      'Oakridge',
      'Mount Pleasant',
      'Commercial Drive',
      'East Vancouver'
    ],
    contactInfo: {
      phone: '(604) 555-0123',
      email: 'vancouver@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166562.53071982443!2d-123.26521!3d49.26037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you service all areas of Vancouver?',
        answer: 'Yes! We provide luxury floor installation services throughout all Vancouver neighborhoods, from downtown condos to suburban homes.'
      },
      {
        question: 'What is the typical timeline for Vancouver projects?',
        answer: 'Most residential projects in Vancouver take 3-5 days including surface preparation and curing time. We\'ll provide a detailed timeline during your consultation.'
      },
      {
        question: 'Do you offer free consultations in Vancouver?',
        answer: 'Absolutely! We provide free, no-obligation consultations throughout the Vancouver area to assess your project and provide accurate pricing.'
      }
    ]
  },

  'burnaby': {
    id: 'burnaby',
    name: 'Burnaby',
    slug: 'burnaby',
    description: 'Expert luxury flooring services in Burnaby. From Brentwood to Metrotown, we deliver exceptional results.',
    coverageArea: [
      'Brentwood',
      'Metrotown',
      'Deer Lake',
      'Capitol Hill', 
      'Burnaby Heights',
      'Willingdon Heights',
      'Forest Glen',
      'Government Road',
      'Lakecity'
    ],
    contactInfo: {
      phone: '(604) 555-0124',
      email: 'burnaby@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83264.89537478!2d-123.0183!3d49.2488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676c6b73d4e29%3A0x24e5b9b4b8b9b9b9!2sBurnaby%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'How long have you been serving Burnaby?',
        answer: 'We\'ve been providing premium flooring services to Burnaby residents for over 8 years, with hundreds of satisfied customers throughout the city.'
      },
      {
        question: 'Do you work on high-rise condos in Burnaby?',
        answer: 'Yes! We have extensive experience with high-rise installations in Burnaby\'s condo buildings, including proper building protocols and scheduling.'
      }
    ]
  },

  'richmond': {
    id: 'richmond',
    name: 'Richmond',
    slug: 'richmond',
    description: 'Luxury floor installation experts serving all of Richmond. From residential homes to commercial spaces.',
    coverageArea: [
      'Richmond Centre',
      'Brighouse',
      'Seafair',
      'Gilmore',
      'Thompson',
      'Hamilton',
      'Ironwood',
      'Blundell',
      'Steveston'
    ],
    contactInfo: {
      phone: '(604) 555-0125',
      email: 'richmond@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83352.12345!2d-123.1365!3d49.1666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867421b1cf1234%3A0x1234567890abcdef!2sRichmond%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you service Richmond\'s residential areas?',
        answer: 'Yes, we provide complete flooring services throughout all Richmond neighborhoods, specializing in custom luxury installations for homes and condos.'
      }
    ]
  },

  'surrey': {
    id: 'surrey',
    name: 'Surrey',
    slug: 'surrey',
    description: 'Professional luxury flooring throughout Surrey. Serving all areas from Guildford to White Rock border.',
    coverageArea: [
      'Guildford',
      'Fleetwood',
      'Newton',
      'Cloverdale', 
      'South Surrey',
      'Whalley',
      'Bear Creek',
      'Fraser Heights',
      'Panorama Ridge'
    ],
    contactInfo: {
      phone: '(604) 555-0126',
      email: 'surrey@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166832.12345!2d-122.8447!3d49.1913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d07f1234abcd%3A0xabcdef1234567890!2sSurrey%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'What areas of Surrey do you cover?',
        answer: 'We service all Surrey neighborhoods including Guildford, Newton, Cloverdale, South Surrey, and surrounding areas with our complete range of luxury flooring services.'
      }
    ]
  },

  'langley': {
    id: 'langley',
    name: 'Langley',
    slug: 'langley', 
    description: 'Expert luxury flooring installations in Langley. Both Langley City and Township areas covered.',
    coverageArea: [
      'Langley City',
      'Willoughby',
      'Walnut Grove',
      'Fort Langley',
      'Murrayville',
      'Brookswood',
      'Fernridge',
      'Aldergrove'
    ],
    contactInfo: {
      phone: '(604) 555-0127',
      email: 'langley@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83416.12345!2d-122.6605!3d49.1042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548454321abcdefg%3A0x1234567890fedcba!2sLangley%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you service both Langley City and Township?',
        answer: 'Yes! We provide our full range of luxury flooring services to both Langley City and Langley Township, including all surrounding neighborhoods.'
      }
    ]
  },

  'delta': {
    id: 'delta',
    name: 'Delta',
    slug: 'delta',
    description: 'Premium flooring services throughout Delta. From Ladner to Tsawwassen, we deliver excellence.',
    coverageArea: [
      'Ladner',
      'Tsawwassen',
      'North Delta',
      'Sunshine Hills',
      'Scottsdale',
      'Annieville',
      'Burns Bog area'
    ],
    contactInfo: {
      phone: '(604) 555-0128',
      email: 'delta@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83480.12345!2d-123.0583!3d49.0847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548765432109876a%3A0x9876543210abcdef!2sDelta%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'What Delta communities do you serve?',
        answer: 'We proudly serve all Delta communities including Ladner, Tsawwassen, North Delta, and surrounding areas with our complete luxury flooring services.'
      }
    ]
  },

  'new-westminster': {
    id: 'new-westminster',
    name: 'New Westminster',
    slug: 'new-westminster',
    description: 'Luxury flooring experts in New Westminster. Historic charm meets modern flooring solutions.',
    coverageArea: [
      'Downtown New Westminster',
      'Uptown',
      'Queens Park',
      'West End',
      'Connaught Heights',
      'Glenbrooke North',
      'Queensborough'
    ],
    contactInfo: {
      phone: '(604) 555-0129',
      email: 'newwest@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20864.12345!2d-122.9106!3d49.2057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679876543210b%3A0xfedcba0987654321!2sNew%20Westminster%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you work on heritage homes in New Westminster?',
        answer: 'Absolutely! We specialize in luxury flooring for New Westminster\'s beautiful heritage homes, ensuring modern quality while respecting historical character.'
      }
    ]
  },

  'north-vancouver': {
    id: 'north-vancouver',
    name: 'North Vancouver',
    slug: 'north-vancouver',
    description: 'Premium flooring installations across North Vancouver. From waterfront homes to mountain properties.',
    coverageArea: [
      'Lower Lonsdale',
      'Central Lonsdale', 
      'Upper Lonsdale',
      'Lynn Valley',
      'Deep Cove',
      'Blueridge',
      'Edgemont',
      'Pemberton Heights'
    ],
    contactInfo: {
      phone: '(604) 555-0130',
      email: 'northvan@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41696.12345!2d-123.0693!3d49.3199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54876543210987ab%3A0x123456789abcdef0!2sNorth%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you service mountain properties in North Vancouver?',
        answer: 'Yes! We have experience with unique mountain properties and challenging access situations throughout North Vancouver, including Lynn Valley and upper elevation homes.'
      }
    ]
  },

  'west-vancouver': {
    id: 'west-vancouver',
    name: 'West Vancouver',
    slug: 'west-vancouver',
    description: 'Luxury flooring for West Vancouver\'s finest homes. Premium service for premium properties.',
    coverageArea: [
      'Dundarave',
      'Ambleside',
      'Capilano',
      'Chartwell',
      'British Properties',
      'Caulfeild',
      'Cypress Park',
      'Horseshoe Bay'
    ],
    contactInfo: {
      phone: '(604) 555-0131',
      email: 'westvan@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41728.12345!2d-123.1693!3d49.3679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54876789abcdef12%3A0xfedcba9876543210!2sWest%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'What makes your service suitable for luxury West Vancouver homes?',
        answer: 'Our team specializes in high-end installations with attention to detail expected in West Vancouver\'s luxury properties. We use only premium materials and provide white-glove service.'
      }
    ]
  },

  'coquitlam': {
    id: 'coquitlam',
    name: 'Coquitlam',
    slug: 'coquitlam',
    description: 'Expert flooring installations throughout Coquitlam. From Burke Mountain to central Coquitlam.',
    coverageArea: [
      'Central Coquitlam',
      'Burke Mountain',
      'Westwood Plateau',
      'River Springs',
      'Ranch Park',
      'Minnekhada',
      'Town Centre'
    ],
    contactInfo: {
      phone: '(604) 555-0132',
      email: 'coquitlam@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83200.12345!2d-122.7625!3d49.2838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485abcdef123456%3A0x6789abcdef012345!2sCoquitlam%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you service the newer developments in Burke Mountain?',
        answer: 'Yes! We have extensive experience with Coquitlam\'s newer developments including Burke Mountain, Westwood Plateau, and all surrounding areas.'
      }
    ]
  },

  'port-coquitlam': {
    id: 'port-coquitlam',
    name: 'Port Coquitlam',
    slug: 'port-coquitlam',
    description: 'Professional luxury flooring in Port Coquitlam. Quality installations for the "PoCo" community.',
    coverageArea: [
      'Downtown Port Coquitlam',
      'Riverwood',
      'Citadel Heights',
      'Oxford Heights',
      'Mary Hill',
      'Birchland Manor'
    ],
    contactInfo: {
      phone: '(604) 555-0133',
      email: 'portcoq@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41600.12345!2d-122.7791!3d49.2626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485fedcba987654%3A0x123456789abcdef0!2sPort%20Coquitlam%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'What neighborhoods in Port Coquitlam do you serve?',
        answer: 'We provide service throughout all Port Coquitlam neighborhoods including downtown, Riverwood, Citadel Heights, and surrounding residential areas.'
      }
    ]
  },

  'maple-ridge': {
    id: 'maple-ridge',
    name: 'Maple Ridge',
    slug: 'maple-ridge',
    description: 'Luxury flooring experts serving Maple Ridge. From Albion to Silver Valley and beyond.',
    coverageArea: [
      'Maple Ridge Centre',
      'Albion',
      'Hammond',
      'Silver Valley',
      'Thornhill',
      'Whonnock',
      'Webster\'s Corners'
    ],
    contactInfo: {
      phone: '(604) 555-0134',
      email: 'mapleridge@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83520.12345!2d-122.5962!3d49.2197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548456789abcdef1%3A0xfedcba0123456789!2sMaple%20Ridge%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you travel to rural properties in Maple Ridge?',
        answer: 'Absolutely! We service all Maple Ridge areas including more rural and acreage properties. We\'re equipped to handle unique access situations.'
      }
    ]
  },

  'white-rock': {
    id: 'white-rock',
    name: 'White Rock',
    slug: 'white-rock',
    description: 'Premium flooring installations in White Rock. Oceanfront luxury meets exceptional craftsmanship.',
    coverageArea: [
      'East Beach',
      'West Beach',
      'Hillside',
      'Centennial Park',
      'Five Corners',
      'Bayridge'
    ],
    contactInfo: {
      phone: '(604) 555-0135',
      email: 'whiterock@luxuryfloors.ca'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20800.12345!2d-122.8025!3d49.0208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485678901234567%3A0x9876543210abcdef!2sWhite%20Rock%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca',
    faqItems: [
      {
        question: 'Do you specialize in oceanfront properties in White Rock?',
        answer: 'Yes! We have extensive experience with White Rock\'s beautiful oceanfront properties and understand the unique requirements for coastal installations.'
      }
    ]
  }
};

// Contact information for main office
export const contactInfo = {
  mainOffice: {
    phone: '(604) 555-0123',
    email: 'info@luxuryfloors.ca',
    address: '123 Main Street, Vancouver, BC V6B 1A1'
  },
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    weekends: '9:00 AM - 4:00 PM',
    emergency: '24/7 Emergency Service Available'
  }
};

// Export helper functions
export function getLocationById(id: LocationId): Location | undefined {
  return locationData[id];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return Object.values(locationData).find(location => location.slug === slug);
}

export function getAllLocations(): Location[] {
  return Object.values(locationData);
}
