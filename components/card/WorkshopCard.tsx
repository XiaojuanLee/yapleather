import Image from 'next/image';
import Link from 'next/link';
import { WorkshopCardProps } from '@/utils/types';
import { formatCurrency } from '@/utils/format';

function WorkshopCard({ workshop }: { workshop: WorkshopCardProps }) {
  const { id: workshopId, workshopName, image, difficulty, price } = workshop;
  // const images = Array.isArray(image) ? image : [image]; 
  const images = JSON.parse(image); 
  const firstImage = images[0]; 
  console.log(firstImage);

  return (
    <article className='group relative shadow-md'>
      <Link href={`/classes/${workshopId}`}>
      
        <div className='relative h-[200px] mb-2 overflow-hidden rounded-md'>
          <Image
            src={firstImage}
            fill
            sizes='(max-width:768px) 100vw, 50vw'
            alt={workshopName}
            className='rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500'
          />
        </div>
 
            <h3 className='text-base font-semibold mt-1 px-6'>
              {workshopName}
            </h3>
            <p className='text-base mt-1 text-muted-foreground px-6'>
              {difficulty.substring(0, 40)}
            </p>

       
            <div className='flex justify-between items-center mt-1 mb-2 px-6'>
              <p className='text-base mt-1'>
                <span className='font-semibold'>{formatCurrency(price)} </span>
              </p>
              <p className='text-xs'>Leather Workshop</p>
            </div>

   
      </Link>
    </article>
  );
}
export default WorkshopCard;
