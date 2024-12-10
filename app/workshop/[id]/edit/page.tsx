import {
  fetchWorkshopDetails,
  // updateWorkdshopImageAction,
  updateWorkshopAction,
} from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import { SubmitButton } from '@/components/form/Buttons';
import { redirect } from 'next/navigation';
import DifficultyInput from '@/components/form/DifficultyInput';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ImageUpdateContainer from '@/components/workshop/ImageUpdateContainer';
import ImageDeleteContainer from '@/components/workshop/ImageDeleteContainer';




async function EditWorkshopPage({ params }: { params: { id: string } }) {


  const workshop = await fetchWorkshopDetails(params.id);
  if (!workshop) redirect('/');

  const images = JSON.parse(workshop.image); 


  return (
    <section>
      <h1 className='text-2xl font-semibold my-8 mx-8 capitalize'>Edit Workshop</h1>
      <div>
        <ImageDeleteContainer 
        name={workshop.workshopName}
        images={images}
        id={workshop.id} 
        >
        <input type='hidden' name='id' value={workshop.id} />
        </ImageDeleteContainer>
        
        {/* <ImageUpdateContainer 
        name={workshop.workshopName}
        text='Update Image'
        action={updateWorkdshopImageAction}
        images={images}
        >
        <input type='hidden' name='id' value={workshop.id} />
        </ImageUpdateContainer> */}
      </div>
      <div className='border p-8 rounded-md '>
        <FormContainer action={updateWorkshopAction}>
          <input type='hidden' name='id' value={workshop.id} />
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='workshopName'
              type='text'
              label='Name (20 limit)'
              defaultValue={workshop.workshopName}
            />
            {/* price */}
            <PriceInput defaultValue={workshop.price}/>
            <DifficultyInput defaultValue={workshop.difficulty}/>
            
            <FormInput
              name='sort'
              type='number'
              label='Sort'
              defaultValue={workshop.sort.toString()}
            />
            <FormInput
              name='ticket'
              type='number'
              label='Available ticket quantity'
              defaultValue={workshop.ticket.toString()}
            />
            
            {/* size */}
            <div>
              <Label htmlFor='size' className='capitalize'>
                Size
              </Label>
              <Textarea
                  id= 'size'
                  name= 'size'
                  rows= {2}
                  required
                  className='leading-loose'
                  defaultValue={workshop.size}
                />
            </div>

            {/* description */}
            <div>
              <Label htmlFor='description' className='capitalize'>
                description
              </Label>
              <Textarea
                  id= 'description'
                  name= 'description'
                  rows= {5}
                  required
                  className='leading-loose'
                  defaultValue={workshop.description}
                />
            </div>
          </div>
          <SubmitButton text='edit workshop' className='mt-12' />
        </FormContainer>

 






      
  



      </div>


    
    </section>
    
  );
}
export default EditWorkshopPage;
