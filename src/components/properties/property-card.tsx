import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import type { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-transform transform group-hover:scale-105 group-hover:shadow-xl duration-300">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              data-ai-hint={property.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="secondary" className="mb-2">For Sale</Badge>
          <CardTitle className="text-lg font-semibold leading-tight mb-2 truncate">{property.name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
            <span className="truncate">{property.address}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-secondary/30">
          <p className="text-xl font-bold text-primary">
            ${property.price.toLocaleString()}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
