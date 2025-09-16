'use client';

import { useState } from 'react';
import type { Property } from '@/lib/types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { generatePropertyDescriptionAction } from '@/app/actions';
import { Sparkles, BedDouble, Bath, Calendar, DollarSign, MapPin } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface PropertyDetailsClientProps {
  property: Property;
}

export default function PropertyDetailsClient({ property }: PropertyDetailsClientProps) {
  const [aiDescription, setAiDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateDescription = async () => {
    setIsLoading(true);
    setAiDescription(null);
    const result = await generatePropertyDescriptionAction({
      name: property.name,
      address: property.address,
      price: property.price,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      yearBuilt: property.yearBuilt,
    });

    if ('description' in result) {
      setAiDescription(result.description);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div className="relative aspect-video md:aspect-auto rounded-lg overflow-hidden shadow-lg">
        <Image src={property.image} alt={property.name} fill className="object-cover" data-ai-hint={property.imageHint} />
      </div>

      <div className="space-y-6">
        <div>
          <Badge variant="secondary">For Sale</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2">{property.name}</h1>
          <div className="flex items-center text-lg text-muted-foreground mt-2">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.address}</span>
          </div>
        </div>

        <Card className="shadow-md">
          <CardContent className="p-6 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="font-semibold text-lg">${property.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <BedDouble className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Bedrooms</p>
                <p className="font-semibold text-lg">{property.bedrooms}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Bath className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Bathrooms</p>
                <p className="font-semibold text-lg">{property.bathrooms}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Year Built</p>
                <p className="font-semibold text-lg">{property.yearBuilt}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary" />
              <span>AI-Powered Description</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {aiDescription && (
              <p className="text-muted-foreground whitespace-pre-wrap">{aiDescription}</p>
            )}
            {!isLoading && !aiDescription && (
              <p className="text-sm text-muted-foreground">
                Click the button to generate an engaging property description using AI.
              </p>
            )}
            <Button onClick={handleGenerateDescription} disabled={isLoading} className="mt-4">
              <Sparkles className="mr-2 h-4 w-4" />
              {isLoading ? 'Generating...' : 'Generate Description'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
