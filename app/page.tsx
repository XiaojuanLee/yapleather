import LoadingCards from '@/components/card/LoadingCards';
import Banner from '@/components/home/Banner';
import WorkshopsContainer from '@/components/home/WorkshopsContainer';
import { Suspense } from 'react';
import MyMap from '@/components/home/MyMap';
import CategoriesList from '@/components/home/CategoriesList';

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; };
}) {
  return (
    <div>
      <Banner></Banner>
      <section className='container py-10'>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl mb-4">Leathercraft Workshops</h2>
          <p className="mb-4">Join our workshops and craft your own unique leather items with expert guidance.</p>
        </div>
        <div className="flex justify-center">
          <CategoriesList category={searchParams.category} />
        </div>
        <Suspense fallback={<LoadingCards />}>
          <WorkshopsContainer
          category={searchParams.category}
          />
        </Suspense>
      </section>
      <MyMap></MyMap>
      
    </div>
  );
}
export default HomePage;
