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
    const description = formData.get('description')?.toString() || '';
    


    const images = formData.getAll('images');
    const imagePaths = [];

    for (const image of images) {
      if (image instanceof File) {
        const validatedFile = validateWithZodSchema(imageSchema, { image: image });
        const imagePath = await uploadImage(validatedFile.image);
        imagePaths.push(imagePath);
      }
    }
    
    console.log({ workshopName, price, difficulty, description, imagePaths });

    await db.workshop_test.create({
      data: {
        workshopName: workshopName,
        price: price,
        difficulty: difficulty,
        description: description,
        image: JSON.stringify(imagePaths), 
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
  const workshops = await db.workshop_test.findMany({
    
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
  const workshops = await db.workshop_test.findMany({
    
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


export const fetchWorkshopDetails = async (id: string) => {
  return await db.workshop_test.findUnique({
    where: {
      id,
    },
  });
};


export const createBookingAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {


  try {
    const workshopId = formData.get('workshopId')?.toString() || '';
    const numberOfPeople = parseInt(formData.get('numberOfPeople')?.toString() || '1', 10);
    const fullName = formData.get('fullName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const scheduledDate = new Date(formData.get('scheduledDate')?.toString() || '');

    console.log({ workshopId, numberOfPeople, fullName, email, phone, scheduledDate});

    

    // 创建预订记录
    await db.booking.create({
      data: {
        workshopId,
        numberOfPeople,
        fullName,
        email,
        phone,
        scheduledDate: scheduledDate,
        orderTotal: 0,
        paymentStatus: false, // 初始设置为未支付
      },
    });

    // 重定向到成功页面
    revalidatePath("/");
    return { message: 'Workshop created successfully' }; 
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking. Please try again later.');
  }
}