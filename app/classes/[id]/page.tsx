import { BookingCalendar } from '@/components/booking/ bookingCalendar';
import { BookingSelect } from '@/components/booking/bookingSelect';
import BreadCrumbs from '@/components/workshop/BreadCrumbs';
import ImageContainer from '@/components/workshop/ImageContainer';
import { fetchWorkshopDetails } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import { redirect } from 'next/navigation';
import FormContainer from '@/components/form/FormContainer';
import { createBookingAction } from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import { Label } from '@/components/ui/label';


 async function WorkshopDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params; 
  
  const workshop = await fetchWorkshopDetails(id);
  
  if (!workshop) redirect('/');

  // const images = Array.isArray(workshop.image) ? workshop.image : [workshop.image]; 

  const images = JSON.parse(workshop.image); 


  
    return (
      <section className='container py-10'>
        <BreadCrumbs name={workshop.workshopName} />
        <div className='flex flex-col  md:flex-row gap-14'>
          <div>
            <ImageContainer images={images} name={workshop.workshopName} />
          </div>
          <div className='flex flex-col'>
                <h1 className='text-3xl font-bold capitalize mb-4'>{workshop.workshopName}</h1>
              <div className='mb-4'>
                <h2 className='text-xl font-bold capitalize mb'>Leather Workshop</h2>
                <p>Level: {workshop.difficulty}</p>
                <p className='text-base mt-1'>Workshop Fee: CA{formatCurrency(workshop.price)} (includes materials)</p>
                <p>Description: {workshop.description}</p>
              </div>
              <div className='mr-auto'>
                <h2 className='text-xl font-bold capitalize mb'>
                  Booking
                </h2>
                <FormContainer action={createBookingAction}>
                  <input type="hidden" name="workshopId" value={workshop.id} />
                  <div className='mb-2'>
                    <BookingCalendar name='scheduledDate'/>
                  </div>
                  <div className='mb-2'>
                    <Label>Preferred time</Label>
                    <BookingSelect name='scheduledTime' />
                  </div>

                  <FormInput type='number' name='numberOfPeople' label='Number of People' defaultValue='1' />
                  <FormInput type='text' name='fullName' label='Full Name' />
                  <FormInput type='email' name='email' label='Email' />
                  <FormInput type='phone' name='phone' label='Phone' />
                  <SubmitButton text='Reserve' className='px-24' />

                </FormContainer>

            </div>
          </div>
          
        </div>
        

      </section>
    );
  }
  
  export default WorkshopDetailsPage;