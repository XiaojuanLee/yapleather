import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createWorkshopAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import PriceInput from '@/components/form/PriceInput';
import DifficultyInput from '@/components/form/DifficultyInput';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ImageInput from '@/components/form/ImageInput';
import CategoriesInput from '@/components/form/CategoriesInput';

function CreateWorkshopPage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold m-8 capitalize'>
        create workshops
      </h1>
      <div className='border p-8 rounded'>
        <FormContainer action={createWorkshopAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='workshopName'
              type='text'
              label='Name (20 limit)'
            />
            {/* price */}
            <PriceInput />
            <DifficultyInput/>
            <ImageInput />
            
            <FormInput
              name='sort'
              type='number'
              label='Sort'
            />
            <FormInput
              name='ticket'
              type='number'
              label='Available ticket quantity'
            />
            {/* categories */}
            <CategoriesInput />
            
            
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
                />
            </div>
          </div>
          <SubmitButton text='create workshop' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateWorkshopPage;


