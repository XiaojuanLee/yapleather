'use client';

import { useEffect, useState } from 'react';
import { actionFunction } from '@/utils/types';
import { useToast } from '@/hooks/use-toast';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });

      if (state.message === 'Sorry, this time slot is already booked. Please choose another time.') {
        setErrorMessage('The preferred time you selected is fully booked. Please choose another time.');
      } else {
        setErrorMessage('');  
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction}>
      {children}
      {errorMessage && <div style={{ color: 'red', marginBottom: '10px', width:'250px'}}>{errorMessage}</div>}
    </form>
  );
}

export default FormContainer;
