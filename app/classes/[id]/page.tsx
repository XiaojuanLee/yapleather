

import BreadCrumbs from '@/components/workshop/BreadCrumbs';
import ImageContainer from '@/components/workshop/ImageContainer';
import { fetchWorkshopDetails } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import { redirect } from 'next/navigation';

interface WorkshopDetailsPageProps {
  params: { id: string };
}

async function WorkshopDetailsPage({ params }: WorkshopDetailsPageProps) {
  const { id } = params; 
  const workshop = await fetchWorkshopDetails(id);
  if (!workshop) redirect('/');

    return (
      <section className='container py-10'>
        <BreadCrumbs name={workshop.workshopName} />
        <ImageContainer mainImage={workshop.image} name={workshop.workshopName} />
        <header className='flex justify-between items-center mt-10 mb-4'>
          <h1 className='text-4xl font-bold capitalize'>{workshop.workshopName}</h1>
        </header>
        <section className='lg:grid lg:grid-cols-12 gap-x-12 '>
          <div className='lg:col-span-8'>
            <p>Difficulty: {workshop.difficulty}</p>
            <p className='text-base mt-1'>Price: {formatCurrency(workshop.price)}</p>
            <p>Description: {workshop.description}</p>            
          </div>
        </section>
      </section>
    );
  }
  
  export default WorkshopDetailsPage;