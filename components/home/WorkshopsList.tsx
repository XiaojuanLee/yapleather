import WorkshopCard from '../card/WorkshopCard';
import type { WorkshopCardProps } from '@/utils/types';

function WorkshopsList({ workshops }: { workshops: WorkshopCardProps[] }) {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {workshops.map((workshop) => {
        return <WorkshopCard key={workshop.id} workshop={workshop} />;
      })}
    </section>
  );
}
export default WorkshopsList;
