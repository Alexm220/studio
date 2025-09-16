import { getProperties, getPriceRange } from '@/lib/properties';
import PropertyListings from '@/components/properties/property-listings';

export default async function Home() {
  const properties = await getProperties();
  const [minPrice, maxPrice] = await getPriceRange();

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">
        Find Your Dream Property
      </h1>
      <PropertyListings initialProperties={properties} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}
