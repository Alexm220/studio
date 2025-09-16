import type { Property } from './types';

const properties: Property[] = [
  {
    id: '1',
    idOwner: 'owner-123',
    name: 'Modern Family Home',
    address: '123 Maple Street, Springfield, IL',
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    yearBuilt: 2018,
    image: 'https://picsum.photos/seed/1/600/400',
    imageHint: 'modern house',
  },
  {
    id: '2',
    idOwner: 'owner-456',
    name: 'Downtown Luxury Loft',
    address: '456 Oak Avenue, Metropolis, NY',
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    yearBuilt: 2020,
    image: 'https://picsum.photos/seed/2/600/400',
    imageHint: 'luxury apartment',
  },
  {
    id: '3',
    idOwner: 'owner-789',
    name: 'Cozy Countryside Cottage',
    address: '789 Pine Lane, Smallville, KS',
    price: 280000,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 1995,
    image: 'https://picsum.photos/seed/3/600/400',
    imageHint: 'cozy cottage',
  },
  {
    id: '4',
    idOwner: 'owner-101',
    name: 'Spacious Suburban Villa',
    address: '101 Elm Street, Pleasantville, CA',
    price: 950000,
    bedrooms: 5,
    bathrooms: 5,
    yearBuilt: 2015,
    image: 'https://picsum.photos/seed/4/600/400',
    imageHint: 'villa pool',
  },
  {
    id: '5',
    idOwner: 'owner-212',
    name: 'Chic Urban Studio',
    address: '212 Birch Road, Gotham, NJ',
    price: 320000,
    bedrooms: 1,
    bathrooms: 1,
    yearBuilt: 2022,
    image: 'https://picsum.photos/seed/5/600/400',
    imageHint: 'stylish loft',
  },
  {
    id: '6',
    idOwner: 'owner-333',
    name: 'Beachfront Paradise',
    address: '333 Ocean Drive, Starfish Island, FL',
    price: 1200000,
    bedrooms: 3,
    bathrooms: 4,
    yearBuilt: 2010,
    image: 'https://picsum.photos/seed/6/600/400',
    imageHint: 'beachfront house',
  },
];

export const getProperties = async (): Promise<Property[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return properties;
};

export const getPropertyById = async (id: string): Promise<Property | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return properties.find(p => p.id === id);
};

export const getPriceRange = async (): Promise<[number, number]> => {
  if (properties.length === 0) {
    return [0, 1000000];
  }
  const prices = properties.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}
