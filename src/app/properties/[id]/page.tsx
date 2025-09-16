import { getPropertyById } from '@/lib/properties';
import { notFound } from 'next/navigation';
import PropertyDetailsClient from '@/components/properties/property-details-client';

type PropertyPageProps = {
  params: {
    id: string;
  };
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <PropertyDetailsClient property={property} />
    </div>
  );
}
