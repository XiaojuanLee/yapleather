import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { createContactUsAction } from "@/utils/actions";

export default async function ContactUs() {
    return (

        <section>
            <div className='border p-8 rounded-md '>
                <FormContainer action={createContactUsAction}>
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                        <FormInput type='text' name='fullName' label='Full Name' />
                        <FormInput type='text' name='email' label='Email' />
                        <div className='mb-2'>
                            <Label htmlFor='message' className='capitalize'>
                                Message
                            </Label>
                            <Textarea
                                id= 'message'
                                name= 'message'
                                rows= {5}
                                required
                                className='leading-loose'
                            />
                        
                        </div>
                    </div>
                    <SubmitButton text='Submit' className='mt-8' />
                </FormContainer>
            </div>
        </section>
    );
}