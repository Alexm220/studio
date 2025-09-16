'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Property } from '@/lib/types';
import PropertyFilters from './property-filters';
import PropertyCard from './property-card';

interface PropertyListingsProps {
  initialProperties: Property[];
  minPrice: number;
  maxPrice: number;
}

export default function PropertyListings({ initialProperties, minPrice, maxPrice }: PropertyListingsProps) {
  const [nameFilter, setNameFilter] = useState('');
  const [addressFilter, setAddressFilter] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  const filteredProperties = useMemo(() => {
    return initialProperties.filter(property => {
      const nameMatch = property.name.toLowerCase().includes(nameFilter.toLowerCase());
      const addressMatch = property.address.toLowerCase().includes(addressFilter.toLowerCase());
      const priceMatch = property.price >= priceRange[0] && property.price <= priceRange[1];
      return nameMatch && addressMatch && priceMatch;
    });
  }, [initialProperties, nameFilter, addressFilter, priceRange]);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div>
      <PropertyFilters
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        addressFilter={addressFilter}
        setAddressFilter={setAddressFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No properties match your criteria.</p>
        </div>
      )}
    </div>
  );
}
