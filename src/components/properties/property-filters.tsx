'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter } from 'lucide-react';

interface PropertyFiltersProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  addressFilter: string;
  setAddressFilter: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
}

export default function PropertyFilters({
  nameFilter,
  setNameFilter,
  addressFilter,
  setAddressFilter,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
}: PropertyFiltersProps) {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <span>Filter Properties</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Property Name</Label>
            <Input
              id="name"
              placeholder="e.g., Modern Family Home"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="e.g., 123 Maple Street"
              value={addressFilter}
              onChange={(e) => setAddressFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Price Range</Label>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={10000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
