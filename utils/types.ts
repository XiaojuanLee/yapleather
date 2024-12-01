export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type WorkshopCardProps = {
  image: string;
  id: string;
  workshopName: string;
  difficulty: string;
  price: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};