'use server';
import db from './db';
import { redirect } from 'next/navigation';
import { uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';

import {
  imageSchema,
  validateWithZodSchema,
} from './schemas';

const renderError = (error: unknown): { message: string } => {
  if (error) {
    console.log(error);
  }
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};


export const createContactUsAction = async (
  prevState: any,
  formData: FormData
) => {
  try {

    const fullName = formData.get('fullName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    console.log({ fullName, email, message });

    await db.contactUs.create({
      data: {
        fullName: fullName,
        email: email,
        message: message
      },
    });

  } catch (error: any) {
    if (error) {
      console.log(error.message);
    }
    return renderError(error);
  }
  redirect('/');
};


export const createWorkshopAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    
    const workshopName = formData.get('workshopName')?.toString() || '';
    const priceString = formData.get('price')?.toString() || '0';
    const price = parseFloat(priceString);
    const difficulty = formData.get('difficulty')?.toString() || '';
    const file = formData.get('image') as File;
    const description = formData.get('description')?.toString() || '';
    console.log({ workshopName, price, difficulty, description });

    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.workshop.create({
      data: {
        workshopName: workshopName,
        price: price,
        difficulty: difficulty,
        image: fullPath,
        description: description,
      },
    });
    revalidatePath('/');
    revalidatePath('/workshop');
    return { message: 'Workshop created successfully' }; 
  } catch (error) {
    return renderError(error);
  }  
};


export const fetchWorkshops = async () => {
  const workshops = await db.workshop.findMany({
    
    select: {
      id: true,
      workshopName: true,
      difficulty: true,
      price: true,
    },
  });
  
  return workshops;
};



export async function deleteWorkshopAction(prevState: { workshopId: string }) {
  const { workshopId } = prevState;

  try {
    await db.workshop.delete({
      where: {
        id: workshopId,
      },
    });
    revalidatePath('/');
    revalidatePath('/workshop');
    return { message: 'workshop deleted successfully' };
  } catch (error) {
    return renderError(error);
  }
};


export const fetchClasses = async () => {
  const workshops = await db.workshop.findMany({
    
    select: {
      id: true,
      workshopName: true,
      difficulty: true,
      price: true,
      image: true,
    },
    orderBy: {
      updatedAt: 'desc',
    }, 
  });
  return workshops;
};


export const fetchWorkshopDetails = (id: string) => {
  return db.workshop.findUnique({
    where: {
      id,
    },
  });
};