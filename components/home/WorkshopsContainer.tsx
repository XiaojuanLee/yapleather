import { fetchClasses } from '@/utils/actions';
import WorkshopsList from './WorkshopsList';
import EmptyList from './EmptyList';
import type { WorkshopCardProps } from '@/utils/types';

async function WorkshopsContainer({
  category,
}: {
  category?: string;
}) {
  const workshops: WorkshopCardProps[] = await fetchClasses({
    category,
  });
  if (workshops.length === 0) {
    return (
      <EmptyList
        heading='No results.'
        message='Try changing or removing some of your filters.'
        btnText='Clear Filters'
      />
    );
  }

  return <WorkshopsList workshops={workshops} />;
}
export default WorkshopsContainer;
