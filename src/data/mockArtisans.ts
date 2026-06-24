export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
}

export interface Artisan {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  distance: string;
  specialty: string;
  verified: boolean;
}

export const categories: Category[] = [
  {
    id: 'plumber',
    name: 'Plumber',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/plumber-category-image-11ee2fcc-1782256547531.webp',
    description: 'Expert pipe and drainage solutions.'
  },
  {
    id: 'electrician',
    name: 'Electrician',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/electrician-category-image-87e7d57a-1782256548054.webp',
    description: 'Electrical repairs, wiring, and safety.'
  },
  {
    id: 'carpenter',
    name: 'Carpenter',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/carpenter-category-image-d2baa5a0-1782256546843.webp',
    description: 'Custom furniture and wood repairs.'
  },
  {
    id: 'gardener',
    name: 'Gardener',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/gardener-category-image-db5ab667-1782256547647.webp',
    description: 'Lawn care and garden maintenance.'
  },
  {
    id: 'painter',
    name: 'Painter',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/painter-category-image-fae14db5-1782256547531.webp',
    description: 'Interior and exterior painting services.'
  }
  ,
  {
    id: 'motor-vehicle-mechanic',
    name: 'Motor Vehicle Mechanic',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/motor-vehicle-mechanic-category-60748711-1782258028494.webp',
    description: 'Car repairs, engine diagnostics, and maintenance.'
  },
  {
    id: 'motor-bike-mechanic',
    name: 'Motor Bike Mechanic',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/motor-bike-mechanic-category-276f2725-1782258028505.webp',
    description: 'Specialized repairs for motorcycles and scooters.'
  }
];

export const questionsByCategory: Record<string, Question[]> = {
  plumber: [
    {
      id: 'p1',
      text: 'What kind of plumbing issue are you facing?',
      options: ['Leaking Pipe', 'Clogged Drain', 'Water Heater Repair', 'Installation', 'Emergency']
    },
    {
      id: 'p2',
      text: 'Is this for a residential or commercial property?',
      options: ['Residential', 'Commercial']
    }
  ],
  electrician: [
    {
      id: 'e1',
      text: 'What electrical service do you need?',
      options: ['New Installation', 'Fault Finding', 'Socket Repair', 'Lighting Control', 'Full Rewiring']
    },
    {
      id: 'e2',
      text: 'How urgent is this request?',
      options: ['Within 2 hours', 'Today', 'This Week', 'Just getting a quote']
    }
  ],
  carpenter: [
    {
      id: 'c1',
      text: 'What type of woodworking do you need?',
      options: ['Furniture Repair', 'Custom Cabinetry', 'Door/Window Fixing', 'Decking', 'Flooring']
    }
  ],
  gardener: [
    {
      id: 'g1',
      text: 'What is the size of your garden?',
      options: ['Small (Balcony/Patio)', 'Medium (Standard Yard)', 'Large (Estate)']
    }
  ],
  painter: [
    {
      id: 'pa1',
      text: 'What needs painting?',
      options: ['Interior Walls', 'Exterior', 'Furniture', 'Ceiling', 'Full House']
    }
  ]
  ,
  'motor-vehicle-mechanic': [
    {
      id: 'mv1',
      text: 'What type of service do you need?',
      options: ['General Service', 'Engine Repair', 'Brake System', 'Electrical Issues', 'Oil Change']
    },
    {
      id: 'mv2',
      text: 'Is your vehicle currently drivable?',
      options: ['Yes', 'No - Needs Towing']
    }
  ],
  'motor-bike-mechanic': [
    {
      id: 'mb1',
      text: 'What kind of bike do you have?',
      options: ['Sport Bike', 'Cruiser', 'Scooter', 'Dirt Bike', 'Commuter']
    },
    {
      id: 'mb2',
      text: 'What seems to be the problem?',
      options: ['Engine/Performance', 'Tires/Wheels', 'Chain/Drive', 'Brakes', 'Electrical']
    }
  ]
};

export const mockArtisans: Artisan[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    category: 'plumber',
    rating: 4.9,
    reviews: 124,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/artisan-profile-1-1c6d5074-1782256547532.webp',
    distance: '1.2 km',
    specialty: 'Leak Detection & Repair',
    verified: true
  },
  {
    id: '2',
    name: 'James Wilson',
    category: 'electrician',
    rating: 4.8,
    reviews: 89,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/artisan-profile-2-56c5e45a-1782256549124.webp',
    distance: '0.8 km',
    specialty: 'Home Automation & Safety',
    verified: true
  },
  {
    id: '3',
    name: 'Robert Brown',
    category: 'plumber',
    rating: 4.7,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=400&h=400&fit=crop',
    distance: '2.5 km',
    specialty: 'Drain Cleaning',
    verified: false
  },
  {
    id: '4',
    name: 'Emily Davis',
    category: 'carpenter',
    rating: 4.9,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    distance: '3.1 km',
    specialty: 'Bespoke Furniture',
    verified: true
  },
  {
    id: '5',
    name: 'Michael Chen',
    category: 'gardener',
    rating: 4.6,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    distance: '1.5 km',
    specialty: 'Landscape Design',
    verified: true
  },
  {
    id: '6',
    name: 'Alex Rivera',
    category: 'painter',
    rating: 4.8,
    reviews: 31,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    distance: '2.2 km',
    specialty: 'Modern Textures',
    verified: true
  }
  ,
  {
    id: '7',
    name: 'David Okafor',
    category: 'motor-vehicle-mechanic',
    rating: 4.9,
    reviews: 156,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/mechanic-artisan-1-523caa39-1782258028144.webp',
    distance: '1.8 km',
    specialty: 'Engine Diagnostics',
    verified: true
  },
  {
    id: '8',
    name: 'Lisa Venter',
    category: 'motor-bike-mechanic',
    rating: 4.7,
    reviews: 48,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/577fd51c-840b-4bd6-8683-23f7c292b299/mechanic-artisan-2-18810881-1782258028744.webp',
    distance: '3.5 km',
    specialty: 'Sport Bike Tuning',
    verified: true
  }
];
