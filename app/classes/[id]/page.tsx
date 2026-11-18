
import BreadCrumbs from '@/components/workshop/BreadCrumbs';
import ImageContainer from '@/components/workshop/ImageContainer';
import { fetchWorkshopDetails } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import { redirect } from 'next/navigation';



 async function WorkshopDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params; 
  
  const workshop = await fetchWorkshopDetails(id);
  
  if (!workshop) redirect('/');

  // const images = Array.isArray(workshop.image) ? workshop.image : [workshop.image]; 

  const images = JSON.parse(workshop.image); 


  
    return (
      <section className='container py-10'>
        <BreadCrumbs name={workshop.workshopName}/>
        <div className='flex flex-col  md:flex-row gap-14 mt-2'>
          <div>
            <ImageContainer images={images} name={workshop.workshopName} />
          </div>
          
          <div className='flex flex-col'>
                <h1 className='text-3xl font-bold capitalize mb-4'>{workshop.workshopName}</h1>
              <div className='mb-4'>
                <h2 className='text-xl font-bold capitalize mb'>Leather Workshop</h2>
                <p>Level: {workshop.difficulty}</p>
                <p className='text-base mt-1'>Workshop Fee: CA{formatCurrency(workshop.price)} (includes materials)</p>
                <p>Size: {workshop.size}</p>
                <p>Description: {workshop.description}</p>
                
              </div>

          </div>
          
          
        </div>
        

      </section>
    );
  }
  
  export default WorkshopDetailsPage;