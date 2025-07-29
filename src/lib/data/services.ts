import type { FloorService } from '$lib/types';

export const services = [
  'metallic-epoxy-floors',
  'flake-epoxy-floors', 
  'epoxy-countertops',
  'texture-deck',
  'concrete-walls'
] as const;

export type ServiceId = typeof services[number];

export const serviceData: Record<ServiceId, FloorService> = {
  'metallic-epoxy-floors': {
    id: 'metallic-epoxy-floors',
    title: 'Premium Metallic Epoxy Floors | Luxury Custom Designs',
    slug: 'metallic-epoxy-floors',
    shortDescription: 'Transform your space with stunning metallic epoxy floors - custom designs, premium finishes, 25-year warranty!',
    description: 'Experience the ultimate in luxury flooring with our premium metallic epoxy floor systems. Our certified craftsmen create stunning, one-of-a-kind floors that combine durability with breathtaking aesthetic appeal. Each metallic epoxy floor is a unique work of art, featuring swirling patterns and depth that transform any space into a showcase environment.',
    images: [
      '/assets/metallic-epoxy-floors/carousel/0.jpg',
      '/assets/metallic-epoxy-floors/carousel/1.jpg',
      '/assets/metallic-epoxy-floors/carousel/2.jpg',
      '/assets/metallic-epoxy-floors/carousel/3.jpg',
      '/assets/metallic-epoxy-floors/carousel/4.jpg',
      '/assets/metallic-epoxy-floors/carousel/5.jpg'
    ],
    benefits: [
      'Stunning visual impact with metallic shimmer',
      'Each floor is completely unique',
      'Extremely durable and long-lasting',
      'Easy to clean and maintain',
      'Chemical and stain resistant',
      '25-year warranty included'
    ],
    keyFeatures: [
      'Custom metallic color blends',
      'Professional surface preparation',
      'Multiple coat application system',
      'UV-resistant topcoat protection',
      'Seamless installation process',
      'Expert color consultation'
    ],
    applications: [
      'Residential Living Areas',
      'Luxury Basements',
      'Commercial Showrooms',
      'Retail Spaces',
      'Hotels and Restaurants',
      'Art Galleries'
    ],
    colorChartPoints: [
      'High-Quality Finishes',
      'Versatile Looks',
      'Customizable'
    ],
    cities: [
      'Vancouver',
      'Burnaby', 
      'Richmond',
      'Surrey',
      'Langley',
      'Delta',
      'New Westminster',
      'North Vancouver',
      'West Vancouver',
      'Coquitlam',
      'Port Coquitlam',
      'Maple Ridge',
      'White Rock'
    ],
    price: {
      basePrice: 12,
      unit: 'per square foot',
      factors: [
        'Floor area size',
        'Surface preparation required',
        'Color complexity',
        'Access difficulty'
      ]
    },
    faqItems: [
      {
        question: 'How long does metallic epoxy flooring last?',
        answer: 'Our metallic epoxy floors are designed to last 25+ years with proper care. We provide a 25-year warranty covering both materials and workmanship.'
      },
      {
        question: 'Can I customize the colors and patterns?',
        answer: 'Absolutely! Each metallic epoxy floor is custom-designed. We offer unlimited color combinations and work with you to create your perfect design.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Most residential projects take 3-5 days including surface preparation, application, and curing time. We\'ll provide a detailed timeline during consultation.'
      },
      {
        question: 'Is metallic epoxy suitable for high-traffic areas?',
        answer: 'Yes! Our metallic epoxy systems are extremely durable and perfect for high-traffic residential and commercial spaces.'
      }
    ]
  },

  'flake-epoxy-floors': {
    id: 'flake-epoxy-floors',
    title: 'Decorative Flake Epoxy Floors | Durable & Stylish Finishes', 
    slug: 'flake-epoxy-floors',
    shortDescription: 'Beautiful flake epoxy floors with endless design possibilities - perfect for garages, basements, and commercial spaces!',
    description: 'Our decorative flake epoxy flooring systems combine functionality with style, creating beautiful, durable surfaces perfect for any environment. With countless color combinations and flake sizes available, you can achieve exactly the look you want while enjoying superior protection and longevity.',
    images: [
      '/assets/flake-epoxy-floors/carousel/0.jpg',
      '/assets/flake-epoxy-floors/carousel/1.jpg',
      '/assets/flake-epoxy-floors/carousel/2.jpg',
      '/assets/flake-epoxy-floors/carousel/3.jpg',
      '/assets/flake-epoxy-floors/carousel/4.jpg',
      '/assets/flake-epoxy-floors/carousel/5.jpg'
    ],
    benefits: [
      'Excellent slip resistance',
      'Hides imperfections in concrete',
      'Easy maintenance and cleaning',
      'Chemical and stain resistant',
      'Impact and abrasion resistant',
      'Cost-effective premium solution'
    ],
    keyFeatures: [
      'Multiple flake size options',
      'Unlimited color combinations',
      'Broadcast flake application',
      'Professional surface prep',
      'Polyurethane topcoat',
      'Seamless finish'
    ],
    applications: [
      'House Basements',
      'Patios',
      'Garages',
      'Schools',
      'Grocery Stores',
      'Showrooms'
    ],
    colorChartPoints: [
      'High-Quality Finishes',
      'Versatile Looks',
      'Customizable'
    ],
    cities: [
      'Vancouver',
      'Burnaby',
      'Richmond',
      'Surrey',
      'Langley',
      'Delta',
      'New Westminster',
      'North Vancouver',
      'West Vancouver',
      'Coquitlam'
    ],
    price: {
      basePrice: 8,
      unit: 'per square foot',
      factors: [
        'Floor area size',
        'Flake density selection',
        'Surface condition',
        'Location accessibility'
      ]
    },
    faqItems: [
      {
        question: 'What are the different flake sizes available?',
        answer: 'We offer small, medium, and large flake options. Small flakes provide a subtle texture, while large flakes create a more dramatic appearance.'
      },
      {
        question: 'How slip-resistant are flake epoxy floors?',
        answer: 'Flake epoxy floors provide excellent slip resistance due to the texture created by the broadcast flakes, making them ideal for wet areas.'
      },
      {
        question: 'Can flake epoxy be applied over existing floors?',
        answer: 'Yes, flake epoxy can be applied over properly prepared concrete and some existing floor surfaces after appropriate preparation.'
      }
    ]
  },

  'epoxy-countertops': {
    id: 'epoxy-countertops',
    title: 'Custom Epoxy Countertops | Kitchen & Bathroom Renovations',
    slug: 'epoxy-countertops', 
    shortDescription: 'Stunning custom epoxy countertops for kitchens and bathrooms - unlimited designs, superior durability!',
    description: 'Transform your kitchen or bathroom with our custom epoxy countertops. Our skilled artisans create beautiful, functional surfaces that rival traditional stone at a fraction of the cost. Each countertop is hand-crafted to your exact specifications with unlimited design possibilities.',
    images: [
      '/assets/epoxy-countertops/carousel/0.jpg',
      '/assets/epoxy-countertops/carousel/1.jpg', 
      '/assets/epoxy-countertops/carousel/2.jpg',
      '/assets/epoxy-countertops/carousel/3.jpg',
      '/assets/epoxy-countertops/carousel/4.jpg',
      '/assets/epoxy-countertops/carousel/5.jpg'
    ],
    benefits: [
      'Seamless, non-porous surface',
      'Heat and stain resistant',
      'Unlimited design options',
      'More affordable than stone',
      'Easy to clean and maintain',
      'Custom edge profiles available'
    ],
    keyFeatures: [
      'Hand-poured custom designs',
      'Integrated sink options',
      'Multiple finish textures',
      'Color-matching capabilities', 
      'Professional templating',
      'Expert installation'
    ],
    applications: [
      'Bar Tops',
      'Residential Kitchens',
      'Bathrooms',
      'Dining and Coffee Tables',
      'Shopping Malls',
      'Retail and Commercial Shops'
    ],
    colorChartPoints: [
      'High-Quality Finishes',
      'Versatile Looks',
      'Customizable'
    ],
    cities: [
      'Vancouver',
      'Burnaby',
      'Richmond', 
      'Surrey',
      'Langley',
      'Delta',
      'New Westminster'
    ],
    price: {
      basePrice: 85,
      unit: 'per square foot',
      factors: [
        'Countertop area',
        'Design complexity',
        'Edge profile selection',
        'Integrated features'
      ]
    },
    faqItems: [
      {
        question: 'How do epoxy countertops compare to granite?',
        answer: 'Epoxy countertops offer unlimited design options, seamless installation, and are more affordable than granite while providing excellent durability and functionality.'
      },
      {
        question: 'Are epoxy countertops heat resistant?',
        answer: 'Yes, our epoxy countertops can withstand normal kitchen heat. However, we recommend using trivets for extremely hot items to maintain the finish.'
      },
      {
        question: 'How long does countertop installation take?',
        answer: 'Most countertop projects take 2-3 days including templating, fabrication, and installation. We\'ll minimize disruption to your daily routine.'
      }
    ]
  },

  'texture-deck': {
    id: 'texture-deck',
    title: 'Non-Slip Textured Deck Coatings | Pool Decks & Outdoor Surfaces',
    slug: 'texture-deck',
    shortDescription: 'Safe, beautiful textured deck coatings for pool areas, patios, and outdoor surfaces - slip-resistant and weather-proof!',
    description: 'Our textured deck coating systems provide the perfect combination of safety and beauty for outdoor surfaces. Specially formulated for Canadian weather conditions, these coatings offer superior slip resistance while creating attractive, low-maintenance surfaces that last for years.',
    images: [
      '/assets/texture-deck/carousel/0.jpg',
      '/assets/texture-deck/carousel/1.jpg',
      '/assets/texture-deck/carousel/2.jpg', 
      '/assets/texture-deck/carousel/3.jpg',
      '/assets/texture-deck/carousel/4.jpg',
      '/assets/texture-deck/carousel/5.jpg'
    ],
    benefits: [
      'Excellent slip resistance when wet',
      'UV and weather resistant',
      'Covers cracks and imperfections',
      'Easy to clean and maintain',
      'Cooler surface temperature',
      'Long-lasting durability'
    ],
    keyFeatures: [
      'Textured non-slip surface',
      'Waterproof membrane',
      'UV-stable color options',
      'Crack bridging technology',
      'Professional surface prep',
      'Weather-resistant finish'
    ],
    applications: [
      'Walkways and Driveways',
      'Pool Decks',
      'Balconies and Rooftops',
      'Stairs and Ramps', 
      'Commercial Areas',
      'Sports Complexes'
    ],
    colorChartPoints: [
      'High-Quality Finishes',
      'Versatile Looks'
    ],
    cities: [
      'Vancouver',
      'Burnaby',
      'Richmond',
      'Surrey',
      'Langley',
      'Delta'
    ],
    price: {
      basePrice: 6,
      unit: 'per square foot',
      factors: [
        'Surface area',
        'Texture level selection',
        'Surface preparation needs',
        'Access complexity'
      ]
    },
    faqItems: [
      {
        question: 'How slip-resistant are textured deck coatings?',
        answer: 'Our textured coatings exceed commercial slip-resistance standards, providing excellent traction even when wet.'
      },
      {
        question: 'Will the coating crack in cold weather?',
        answer: 'Our systems are specifically designed for Canadian freeze-thaw cycles and include crack-bridging technology for maximum durability.'
      },
      {
        question: 'How do I maintain a textured deck surface?',
        answer: 'Simple cleaning with soap and water is all that\'s needed. The textured surface actually helps hide dirt and wear patterns.'
      }
    ]
  },

  'concrete-walls': {
    id: 'concrete-walls',
    title: 'Decorative Concrete Wall Coatings | Architectural Finishes',
    slug: 'concrete-walls',
    shortDescription: 'Transform concrete walls with decorative coatings - modern architectural finishes for interior and exterior applications!',
    description: 'Our decorative concrete wall coating systems transform plain concrete walls into stunning architectural features. Perfect for both interior and exterior applications, these coatings provide protection while creating beautiful, modern finishes that enhance any space.',
    images: [
      '/assets/concrete-walls/carousel/0.jpg',
      '/assets/concrete-walls/carousel/1.jpg',
      '/assets/concrete-walls/carousel/2.jpg',
      '/assets/concrete-walls/carousel/3.jpg', 
      '/assets/concrete-walls/carousel/4.jpg',
      '/assets/concrete-walls/carousel/5.jpg'
    ],
    benefits: [
      'Protects concrete from weathering',
      'Modern architectural appearance',
      'Covers surface imperfections',
      'Moisture and stain resistant',
      'Easy cleaning and maintenance',
      'Increases property value'
    ],
    keyFeatures: [
      'Multiple texture options',
      'Interior and exterior use',
      'Color-integrated systems',
      'Breathable formulations',
      'Professional application',
      'Long-term protection'
    ],
    applications: [
      'Walkways and Driveways',
      'Parking Lots',
      'Residential Walls',
      'Playgrounds',
      'Airports',
      'Commercial Areas'
    ],
    colorChartPoints: [
      'High-Quality Finishes',
      'Versatile Looks'
    ],
    cities: [
      'Vancouver',
      'Burnaby',
      'Richmond',
      'Surrey',
      'Langley'
    ],
    price: {
      basePrice: 4,
      unit: 'per square foot',
      factors: [
        'Wall area coverage',
        'Texture selection',
        'Surface preparation',
        'Height accessibility'
      ]
    },
    faqItems: [
      {
        question: 'Can wall coatings be applied to both interior and exterior walls?',
        answer: 'Yes, we have specialized formulations for both interior and exterior applications, each designed for their specific environmental conditions.'
      },
      {
        question: 'How long do concrete wall coatings last?',
        answer: 'With proper application and maintenance, our wall coatings typically last 15-20 years before requiring refresh.'
      },
      {
        question: 'Will the coating prevent moisture problems?',
        answer: 'Our systems are designed to be breathable while providing moisture protection, preventing trapped moisture issues common with non-breathable coatings.'
      }
    ]
  }
};

// Export helper functions
export function getServiceById(id: ServiceId): FloorService | undefined {
  return serviceData[id];
}

export function getServiceBySlug(slug: string): FloorService | undefined {
  return Object.values(serviceData).find(service => service.slug === slug);
}

export function getAllServices(): FloorService[] {
  return Object.values(serviceData);
}

export function getServicesByCity(city: string): FloorService[] {
  return Object.values(serviceData).filter(service => 
    service.cities?.includes(city)
  );
}
