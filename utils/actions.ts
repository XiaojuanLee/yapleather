'use server';
import db from './db';
import { redirect } from 'next/navigation';
import { deleteImage, uploadImage } from './supabase';
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

    revalidatePath('/contact');
    return { message: 'Thank you for getting in touch! We have received your message and will respond shortly.'
     }; 
    
  } catch (error: any) {
    if (error) {
      console.log(error.message);
    }
    return renderError(error);
  }
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
    const size = formData.get('size')?.toString() || '0';
    const sortString = formData.get('sort')?.toString() || '0';
    const sort = parseInt(sortString);
    const description = formData.get('description')?.toString() || '';
    const ticketString = formData.get('ticket')?.toString() || '0';
    const ticket = parseInt(ticketString);
    const category = formData.get('category')?.toString() || '0';

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

    
    await db.workshops.create({
      data: { 
        workshopName: workshopName,
        price: price,
        difficulty: difficulty,
        size:size,
        sort:sort,
        ticket:ticket,
        description: description,
        image: JSON.stringify(imagePaths), 
        category:category,
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
  const workshops = await db.workshops.findMany({
    
    select: {
      id: true,
      workshopName: true,
      difficulty: true,
      price: true,
      sort: true,
      ticket: true,
      category:true,
    },
    orderBy: {
      sort: 'asc',
    }, 
  });
  
  return workshops;
};


export const fetchBookings = async () => {
  const bookings = await db.booking.findMany({
    include: {
      Workshops: {
        select: {
          workshopName: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  
  return bookings;
};


export const fetchContact = async () => {
  const contact = await db.contactUs.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  
  return contact;
};

export async function deleteWorkshopAction(prevState: { workshopId: string }) {
  const { workshopId } = prevState;

  try {
    await db.workshops.delete({
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



export const fetchClasses = async ({
  category,
}: {
    category?: string;
}) => {
  const workshops = await db.workshops.findMany({
    where: {
      category,
    },
    
    select: {
      id: true,
      workshopName: true,
      difficulty: true,
      price: true,
      image: true,
    },
    orderBy: {
      sort: 'asc',
    }, 
  });
  return workshops;
};


export const fetchWorkshopDetails = async (id: string) => {
  return await db.workshops.findUnique({
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

    // Get the date and time from the form data
    const scheduledDate = formData.get("scheduledDate")?.toString() || "";
    const scheduledTime = formData.get("scheduledTime")?.toString() || "";
    
    // Combine date and time into a DateTime object
    const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);

    console.log({ workshopId, numberOfPeople, fullName, email, phone, scheduledDate, scheduledTime, scheduledDateTime});

        // Step 1: Check if the selected date and time is already booked
        const existingBooking = await db.booking.findFirst({
          where: {
            workshopId: {
              not: workshopId,
            },
            scheduledDate: scheduledDateTime, // Ensure it matches the exact date and time
          },
        });
    
        // If there's an existing booking, return an error message
        if (existingBooking) {
          return {
            message: 'The preferred time you selected is fully booked. Please choose another time.',
          };
        }
    
        // Step 2: If no conflict, create the booking
    await db.booking.create({
      data: {
        workshopId,
        numberOfPeople,
        fullName,
        email,
        phone,
        scheduledDate: scheduledDateTime,
        orderTotal: 0,
        paymentStatus: false, // Initial payment status
      },
    });

        // Step 3: Return success message
        // return { message: 'Your booking has been successfully created.' };
        
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking. Please try again later.');
  }
  // redirect('/classes/booking_success');
  redirect('/classes/booking_success');

}



export const updateWorkshopAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const workshopId = formData.get('id') as string;

  try {
    const workshopName = formData.get('workshopName')?.toString() || '';
    const priceString = formData.get('price')?.toString() || '0';
    const price = parseFloat(priceString);
    const difficulty = formData.get('difficulty')?.toString() || '';
    const size = formData.get('size')?.toString() || '0';
    const sortString = formData.get('sort')?.toString() || '0';
    const sort = parseInt(sortString);
    const description = formData.get('description')?.toString() || '';
    const ticketString = formData.get('ticket')?.toString() || '0';
    const ticket = parseInt(ticketString);
    const category = formData.get('category')?.toString() || '0';


    await db.workshops.update({
      where: {
        id: workshopId,
      },
      data: {
        workshopName: workshopName,
        price: price,
        difficulty: difficulty,
        size:size,
        sort:sort,
        ticket:ticket,
        category:category,
        description: description,
      },
    });

    revalidatePath(`/workshop/${workshopId}/edit`);
    revalidatePath('/');
    revalidatePath(`/workshop`);
    

    return { message: 'Update Successful!' };
  } catch (error) {
    return renderError(error);
  }
};


export async function deleteImageAction(prevState: { workshopId: string, image: string,  imagePaths: string[] }) {
  try {
    await deleteImage(prevState.image);

    const updatedImagePaths = prevState.imagePaths.filter(
      (path) => path !== prevState.image
    );

    await db.workshops.update({
      where: {
        id: prevState.workshopId,
      },
      data: {
        image: JSON.stringify(updatedImagePaths), 
      },
    });
    revalidatePath('/')
    revalidatePath(`/classes/${prevState.workshopId}`);
    revalidatePath(`/workshop/${prevState.workshopId}/edit`);
  
  } catch (error) {
    return renderError(error);
  }
}



export const updateWorkshopImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const workshopId = formData.get('id') as string;

  try {
    const images = formData.getAll('images');
    const imagePaths = [];
    let oldImage: string[] = [];

    for (const image of images) {
      if (image instanceof File) {
        const validatedFile = validateWithZodSchema(imageSchema, { image: image });
        const imagePath = await uploadImage(validatedFile.image);
        imagePaths.push(imagePath);
      }
    }
    

      const result = await db.workshops.findUnique({
        where: {
          id: workshopId,
        },
        select: {
          image: true,
        },
      });
      

      if (result) {
        oldImage = JSON.parse(result.image);
        console.log(oldImage);
      }
    
      const mergedImage = oldImage.concat(imagePaths);
      console.log(mergedImage);


    await db.workshops.update({
      where: {
        id: workshopId,
      },
      data: {
        image: JSON.stringify(mergedImage),
      },
    });
    revalidatePath(`/rentals/${workshopId}/edit`);
    return { message: 'Workshop Image Updated Successful' };
  } catch (error) {
    return renderError(error);
  }
};