'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import FormContainer from '../form/FormContainer';
import ImageInput from '../form/ImageInput';
import { SubmitButton } from '../form/Buttons';
import { type actionFunction } from '@/utils/types';

type ImageInputContainerProps = {

  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageUpdateContainer(props: ImageInputContainerProps) {
  const { action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

 
  return (
    <div>
      

      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-lg mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size='sm' />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageUpdateContainer;
